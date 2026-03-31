from flask import Flask, request, jsonify
import torch
import torch.nn.functional as F
from torchvision import transforms
from PIL import Image
import io

app = Flask(__name__)

# Load your TorchScript model
model = torch.jit.load("analysis_model.pt")
model.eval()

class_names = [
    "Bobby Dodd Stadium",
    "Clough Commons",
    "Kendeda Building",
    "Tech Tower",
    "McCamish Pavilion"
]

transform = transforms.Compose([
    transforms.Resize(256),
    transforms.CenterCrop(224),
    transforms.ToTensor(),
    transforms.Normalize(
        mean=[0.485, 0.456, 0.406],
        std=[0.229, 0.224, 0.225]
    )
])

@app.route("/predict", methods=["POST"])
def predict():
    if "image" not in request.files:
        return jsonify({"error": "No image provided"}), 400

    file = request.files["image"]
    img = Image.open(io.BytesIO(file.read())).convert("RGB")
    x = transform(img).unsqueeze(0)

    with torch.no_grad():
        out = model(x)
        probs = F.softmax(out, dim=1)
        pred = probs.argmax(dim=1).item()

    return jsonify({
        "prediction": class_names[pred],
        "confidence": round(probs[0][pred].item(), 4)
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)