import joblib

bot_model = joblib.load("models/bot_classifier.pkl")
depr_model = joblib.load("models/depr_model.pkl")

def analyze_message(msg):
    label = bot_model.predict([msg])[0]
    proba = bot_model.predict_proba([msg]).max() * 100
    depr = depr_model.predict([msg])[0]

    return {
        "is_human": label == "human",
        "confidence": round(proba, 2),
        "deprivation_score": round(depr, 2)
    }


if __name__ == "__main__":
    msg = input("Enter help message:\n> ")
    result = analyze_message(msg)
    print("\n📊 Analysis:")
    print(result)
