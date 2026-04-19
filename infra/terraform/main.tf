provider "google" {
  project = "guardian-lens-ai"
  region  = "us-central1"
}

resource "google_cloud_run_service" "backend" {
  name     = "guardian-backend"
  location = "us-central1"

  template {
    spec {
      containers {
        image = "gcr.io/guardian-lens-ai/backend"
      }
    }
  }
}