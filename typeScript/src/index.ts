/**
 * 
 * @param constructor Decoradores
 * @returns 
 */


function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }
   
  @reportableClassDecorator
  class BugReport {
    type = "reporte";
    title: string;
      reportingURL: any;
   
    constructor(t: string) {
      this.title = t;
    }
  }
   
  const bug = new BugReport("Marcelo Peralta");
  console.log(bug.title); // Prints "Needs dark mode"
  console.log(bug.type); // Prints "report"
  bug.reportingURL;