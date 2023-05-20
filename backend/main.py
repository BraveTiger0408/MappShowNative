import uvicorn

if __name__ == "__main__":
    uvicorn.run(
        "app.api:app",
        host="192.168.1.52",  # Change this to your IP address if needed
        port=8080,
        reload=True,
    )
