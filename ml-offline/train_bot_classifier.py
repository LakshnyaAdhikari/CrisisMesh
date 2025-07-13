import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import Pipeline
import joblib

df = pd.read_csv("dataset/bot_vs_human.csv")

pipeline = Pipeline([
    ('tfidf', TfidfVectorizer()),
    ('clf', LogisticRegression())
])

pipeline.fit(df['message'], df['label'])

joblib.dump(pipeline, "models/bot_classifier.pkl")
print("✅ Bot classifier trained and saved.")
