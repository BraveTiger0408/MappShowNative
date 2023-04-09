import uvicorn


if __name__ == "__main__":
    uvicorn.run(
        "app.api:app",
        host="localhost", # Change this to your IP address if needed
        port=8002,
        reload=True
    )