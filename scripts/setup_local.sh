echo "🚀 Setting up Guardian Lens AI..."

echo "Installing backend..."
cd backend && npm install

echo "Installing ML dependencies..."
cd ../python-ml && pip install -r requirements.txt

echo "Installing frontend..."
cd ../frontend && npm install

echo "✅ Setup complete"