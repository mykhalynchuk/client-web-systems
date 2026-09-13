interface Course {
    name: string;
    duration: number;
    students: string[];
}

class OnlineCourse implements Course {
    name: string;
    duration: number;
    students: string[];

    constructor(name: string, duration: number) {
        this.name = name;
        this.duration = duration;
        this.students = [];
    }

    registerStudent(student: string): void {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
        }
    }

    isStudentRegistered(student: string): boolean {
        return this.students.includes(student);
    }
}

class CourseManager {
    private courses: Course[] = [];

    addCourse(course: Course): void {
        this.courses.push(course);
    }

    removeCourse(courseName: string): void {
        this.courses = this.courses.filter(c => c.name !== courseName);
    }

    findCourse(courseName: string): Course | undefined {
        return this.courses.find(c => c.name === courseName);
    }

    printCourses(): void {
        this.courses.forEach(c => {
            console.log(`Курс: ${c.name} (${c.duration} год)`);
            console.log(`Студенти: ${c.students.join(", ") || "немає"}\n`);
        });
    }
}

const manager = new CourseManager();

const tsCourse = new OnlineCourse("TypeScript Basics", 30);
const embeddedCourse = new OnlineCourse("STM32 Embedded Systems", 60);
const cvCourse = new OnlineCourse("Computer Vision with C++", 45);

manager.addCourse(tsCourse);
manager.addCourse(embeddedCourse);
manager.addCourse(cvCourse);

tsCourse.registerStudent("Іван");
tsCourse.registerStudent("Давид");

embeddedCourse.registerStudent("Степан");
embeddedCourse.registerStudent("Максим");

manager.printCourses();