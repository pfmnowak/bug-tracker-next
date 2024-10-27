export type Status =
  | "ToDo New"
  | "In progress"
  | "Ready to test"
  | "In testing"
  | "Done resolved"
  | "Closed";

export type Task = {
  id: string;
  title: string;
  developerAssigned: string | null;
  testerAssigned: string | null;
  author: string | null;
  sprint: string | null;
  status: Status;
  dateCreated: Date;
  dateModified: Date;
};

export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  age: string;
};
