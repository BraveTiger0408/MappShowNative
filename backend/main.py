import uvicorn


if __name__ == "__main__":
    uvicorn.run(
        "app.api:app",
        host="localhost", # Change this to your IP address
        port=8000,
        reload=True
    )