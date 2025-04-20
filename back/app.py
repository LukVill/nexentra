from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, JSONResponse
import os

app = FastAPI()

# Allow frontend dev server to talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount static files from the React build
if os.path.isdir("static"):
    app.mount("/static", StaticFiles(directory="static"), name="static")

# @app.get("/{full_path:path}")
# async def serve_react_app(full_path: str):
#     index_path = os.path.join("static", "index.html")
#     return FileResponse(index_path)

@app.get("/api/hello")
async def read_root():
    return {"message": "Hello from Python backend! I love Jayla!"}


@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    # Log the error details
    print(f"Unhandled error: {exc}")
    return JSONResponse(
        status_code=500,
        content={"detail": "Internal Server Error"},
    )