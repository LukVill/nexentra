from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, JSONResponse
from fastapi.exceptions import RequestValidationError
from starlette.exceptions import HTTPException as StarletteHTTPException
import os
from fastapi import HTTPException

app = FastAPI()

# Allow frontend dev server to talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Determine the path to the static directory
static_dir = os.path.join(os.path.dirname(__file__), "static")

# Mount static files from the React build
if os.path.isdir("static"):
    app.mount("/static", StaticFiles(directory="static"), name="static")


# Test Hello Endpoint
@app.get("/api/hello")
async def read_root():
    return JSONResponse(
        status_code=200,
        content={"message": "Hello from Python backend! I love Jayla!"}
    )

# Catch-all for undefined API routes
@app.route("/api/{path:path}")
async def catch_all_api(path: str):
    return JSONResponse(
        status_code=404,
        content={"error": f"API endpoint '/api/{path}' not found."}
    )


# Server Side - 404 Handler
@app.get("/{full_path:path}")
async def serve_react_app(full_path: str):
    index_path = os.path.join(static_dir, "index.html")
    if os.path.exists(index_path):
        return FileResponse(index_path)
    # index html not even found
    raise HTTPException(status_code=404, detail="Index page not found. Server error.");

