from typing import List
from pydantic import BaseModel
from fastapi import FastAPI

app = FastAPI()

class Person (BaseModel):
    id: int
    name: str
    age: int

DB: List[Person]= [
    Person(id=1, name="Jamila", age=22),
    Person(id=2, name="Alex", age=18),
    Person(id=3, name="Jose", age=21),


]

@app.get("/api")
def read_root():
    return DB


