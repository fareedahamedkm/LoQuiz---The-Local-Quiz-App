export const questions = [
  // Easy Questions
  {
    id: 1,
    difficulty: "Easy",
    question: "What does SQL stand for?",
    options: [
      "Sequential Query Logic",
      "Structured Query Language",
      "Systematic Query List",
      "Syntax Query Lexicon"
    ],
    answer: "Structured Query Language"
  },
  {
    id: 2,
    difficulty: "Easy",
    question: "Which SQL statement is used to retrieve data from a database?",
    options: [
      "FETCH",
      "QUERY",
      "SELECT",
      "RETRIEVE"
    ],
    answer: "SELECT"
  },
  {
    id: 3,
    difficulty: "Easy",
    question: "Which clause in SQL is used to filter records?",
    options: [
      "SORT BY",
      "WHERE",
      "GROUP BY",
      "FILTER"
    ],
    answer: "WHERE"
  },
  {
    id: 4,
    difficulty: "Easy",
    question: "What SQL function returns the highest value in a column?",
    options: [
      "MAXIMUM()",
      "MIN()",
      "HIGHVAL()",
      "MAX()"
    ],
    answer: "MAX()"
  },
  {
    id: 5,
    difficulty: "Easy",
    question: "Which SQL keyword is used to remove duplicate values?",
    options: [
      "REMOVE",
      "DISTINCT",
      "UNIQUE",
      "FILTER"
    ],
    answer: "DISTINCT"
  },

  // Moderate Questions
  {
    id: 6,
    difficulty: "Moderate",
    question: "What is the purpose of normalization?",
    options: [
      "To increase redundancy and speed up queries",
      "To eliminate redundancy and maintain data integrity",
      "To create more tables in a database",
      "To simplify query execution"
    ],
    answer: "To eliminate redundancy and maintain data integrity"
  },
  {
    id: 7,
    difficulty: "Moderate",
    question: "What is a foreign key in a database?",
    options: [
      "A key that uniquely identifies a record in a table",
      "A key that establishes a link between tables",
      "A key that is always unique",
      "A key used for indexing only"
    ],
    answer: "A key that establishes a link between tables"
  },
  {
    id: 8,
    difficulty: "Moderate",
    question: "What type of relationship exists between students and courses in a university database?",
    options: [
      "One-to-One",
      "One-to-Many",
      "Many-to-One",
      "Many-to-Many"
    ],
    answer: "Many-to-Many"
  },
  {
    id: 9,
    difficulty: "Moderate",
    question: "What is the purpose of the GROUP BY clause?",
    options: [
      "To group identical rows together and apply aggregate functions",
      "To filter data before aggregation",
      "To order data in ascending order",
      "To create a backup of a table"
    ],
    answer: "To group identical rows together and apply aggregate functions"
  },
  {
    id: 10,
    difficulty: "Moderate",
    question: "In a distributed database, which of the following is the main advantage of data replication?",
    options: [
      "Reduces storage costs",
      "Increases query response time",
      "Improves data availability and reliability",
      "Eliminates the need for concurrency control"
    ],
    answer: "Improves data availability and reliability"
  },
  {
    id: 11,
    difficulty: "Moderate",
    question: "Which of the following is NOT a valid property of a transaction in a database?",
    options: [
      "Atomicity",
      "Concurrency",
      "Isolation",
      "Durability"
    ],
    answer: "Concurrency"
  },
  {
    id: 12,
    difficulty: "Moderate",
    question: "Which SQL statement is used to permanently save changes made in a transaction?",
    options: [
      "SAVE",
      "COMMIT",
      "APPLY",
      "FINALIZE"
    ],
    answer: "COMMIT"
  },

  // Hard Questions
  {
    id: 13,
    difficulty: "Hard",
    question: "What is the Boyce-Codd Normal Form (BCNF)?",
    options: [
      "A stricter form of 1NF that ensures atomicity",
      "A stronger version of 2NF that removes transitive dependencies",
      "A form of 3NF that ensures all functional dependencies are on a super key",
      "A denormalization technique for optimizing queries"
    ],
    answer: "A form of 3NF that ensures all functional dependencies are on a super key"
  },
  {
    id: 14,
    difficulty: "Hard",
    question: "What does the following SQL query do?\n\nSELECT department, AVG(salary) FROM employees GROUP BY department HAVING AVG(salary) > 50000;",
    options: [
      "Filters departments where the average salary is greater than 50000",
      "Orders departments by salary in descending order",
      "Groups employees and applies aggregate functions without filtering",
      "Deletes employees earning less than 50000"
    ],
    answer: "Filters departments where the average salary is greater than 50000"
  },
  {
    id: 15,
    difficulty: "Hard",
    question: "What is a document-oriented NoSQL database?",
    options: [
      "A database that stores data as documents, usually in JSON/BSON format",
      "A database that does not support indexing",
      "A database that enforces strict schema rules",
      "A relational database with high flexibility"
    ],
    answer: "A database that stores data as documents, usually in JSON/BSON format"
  },
  {
    id: 16,
    difficulty: "Hard",
    question: "What is the CAP theorem in the context of distributed databases?",
    options: [
      "Consistency, Availability, Partition Tolerance",
      "Cache, API, Processing",
      "Computation, Aggregation, Performance",
      "Classification, Availability, Partitioning"
    ],
    answer: "Consistency, Availability, Partition Tolerance"
  },
  {
    id: 17,
    difficulty: "Hard",
    question: "What is a composite key in a relational database?",
    options: [
      "A key that consists of multiple attributes to uniquely identify a row",
      "A foreign key that references multiple tables",
      "A key that is automatically generated for primary identification",
      "A key used only for performance optimization"
    ],
    answer: "A key that consists of multiple attributes to uniquely identify a row"
  },
  {
    id: 18,
    difficulty: "Hard",
    question: "How does the ACID property of databases relate to normalization?",
    options: [
      "ACID ensures consistency, which normalization supports by eliminating anomalies",
      "ACID and normalization serve completely different purposes",
      "Normalization is an alternative to ACID for ensuring consistency",
      "ACID deals only with security mechanisms"
    ],
    answer: "ACID ensures consistency, which normalization supports by eliminating anomalies"
  },
  {
    id: 19,
    difficulty: "Hard",
    question: "Which of the following statements is true regarding NoSQL databases?",
    options: [
      "They do not support transactions",
      "They provide flexible schema structures",
      "They are always faster than SQL databases",
      "They only store unstructured data"
    ],
    answer: "They provide flexible schema structures"
  },
  {
    id: 20,
    difficulty: "Hard",
    question: "What is the purpose of the CHECK constraint in SQL?",
    options: [
      "To limit the value range for a column",
      "To define a composite key",
      "To establish a relationship between two tables",
      "To create a temporary index for performance"
    ],
    answer: "To limit the value range for a column"
  }
];
