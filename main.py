from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import uuid

app = FastAPI()

# Allow frontend (localhost:3000) to call backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory task list
tasks = []

class Task(BaseModel):
    id: str = None
    title: str

@app.get("/tasks", response_model=List[Task])
def get_tasks():
    return tasks

@app.post("/tasks", response_model=Task)
def create_task(task: Task):
    task.id = str(uuid.uuid4())
    tasks.append(task)
    return task

@app.delete("/tasks/{task_id}")
def delete_task(task_id: str):
    global tasks
    tasks = [t for t in tasks if t.id != task_id]
    return {"ok": True}
