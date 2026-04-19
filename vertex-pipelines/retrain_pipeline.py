from components.training_component import train_model

def retrain_pipeline():
    print("🔁 Starting retraining pipeline...")
    result = train_model()
    print("✅ Retraining complete:", result)

if __name__ == "__main__":
    retrain_pipeline()