# ---------- Build React ----------
    FROM node:18 AS frontend

    WORKDIR /app
    COPY front ./front
    WORKDIR /app/front
    RUN npm install && npm run build


# ---------- Build Python App ----------
    FROM python:3.11-slim

    WORKDIR /app
    
    # Install dependencies
    COPY back/requirements.txt .
    RUN pip install --upgrade pip
    RUN pip install --no-cache-dir -r requirements.txt
    
    # Copy backend code
    COPY back/ ./back


# --------------------


# Copy frontend build into backend
COPY --from=frontend /app/front/build ./back/static


# Set Environment variables
# Immediately print out python prints
ENV PYTHONUNBUFFERED=1
ENV REACT_APP_API_URL=https://nexentra.fly.dev


# Expose app ports
EXPOSE 8000 
EXPOSE 3000  
EXPOSE 80


# Run backend
# Run FastAPI app
CMD ["uvicorn", "back.app:app", "--host", "0.0.0.0", "--port", "8000"]