"use strict";
/**
 * name - string
 * duration - numbers
 * educator - string
 */
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    execute({ name, duration, educator = 'joao' }) {
        console.log(name, duration, educator);
    }
}
exports.default = new CreateCourseService;
