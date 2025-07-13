import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LinearRegression
from sklearn.pipeline import Pipeline
import joblib

df = pd.read_csv("dataset/depr_scores.csv")

pipeline = Pipeline([
    ('tfidf', TfidfVectorizer()),
    ('reg', LinearRegression())
])

pipeline.fit(df['message'], df['score'])

joblib.dump(pipeline, "models/depr_model.pkl")
print("✅ Deprivation model trained and saved.")
