enum Affordability {
  Cheap = 1,
  Medium = 2,
  Expensive = 3,
  Luxurious = 4,
}

enum Complexity {
  Basic = 1,
  Medium = 2,
  Challenging = 3,
  Hard = 4,
}

class Meal {
  constructor(
    public id: string,
    public categoryIds: string[],
    public title: string,
    public affordability: Affordability,
    public complexity: Complexity,
    public imageUrl: string,
    public duration: number,
    public ingredients: string[],
    public steps: string[],
    public isGlutenFree: boolean,
    public isVegan: boolean,
    public isVegetarian: boolean,
    public isLactoseFree: boolean
  ) {}
}

export default Meal;
