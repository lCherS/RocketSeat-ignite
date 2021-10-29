
/**
 * name - string
 * duration - numbers
 * educator - string
 */

interface Course {
  name: string;
  duration: number;
  educator?: string;
}

class CreateCourseService {
  

  execute({name, duration, educator = 'joao'}: Course) {
    console.log(name, duration, educator);
  }
}

export default new CreateCourseService;