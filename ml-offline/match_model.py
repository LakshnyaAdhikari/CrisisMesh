import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.neighbors import NearestNeighbors

data = pd.read_csv("help_data.csv")

vec = CountVectorizer()
X = vec.fit_transform(data['description'])

model = NearestNeighbors(n_neighbors=3, metric='cosine').fit(X)

new_request = ["Need urgent medical help for my child"]
vec_new = vec.transform(new_request)
distances, indices = model.kneighbors(vec_new)

print("Top Matches:")
for i in indices[0]:
    print(data.iloc[i])
