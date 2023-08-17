import { v4 as uuid } from "uuid";

export const projects = [
  {
    id: uuid(),
    years: "2021-Present",
    heading: "CHC(OPTUM health Group)",
    body: "Worked on development of migrating old legacy monolithic java code to microservices architecture with the help of AWS services.",
    points: [
      "I have developed new architecture so that ELB can connect to other ELB.it has increased its efficiency by 20% in prod.",
      "I have reduced 400+ lambda count to 200+ lambda with the help of layers concept in AWS.",
      "Implements way points event with the help of SNS, SQS, AWS Kniess and DynamoDB.",
      "Developed a java code for testing legacy code & new onboarding code in Cert environment.",
      "Developed a React JS single page application to monitor health status.",
      "Developed a CloudWatch dashboard & its metrics to check health status in Realtime.",
      "Developed a script in Node JS for basic Utilites like layerUpdationScript, bulkDashBoardScript etc.",
      "Successfully completed POC for CI-CD pipeline to deploy lambda in dev/Prod.",
    ],
  },
  {
    id: uuid(),
    years: "2022(Oct-Dec)",
    heading: "Internal dashboard for COVID-19.",
    body: "Designed and Developed a Small application for COVID-19 dashboard where I had taken data from WHO website after that with the help of KAFKA connect load data from CSV file to topic and moved topic message into MySQL database with the help of Kafka sink connector. Also developed its backend API and front end in react JS.",
  },
  {
    id: uuid(),
    years: "2019-2021",
    heading: "IPSA Portal",
    body: "Designed and developed an application for Client, where it read the data from JMS Queue and automatically take config details of end user and update their configuration in routers with the help of IPSA tool which is oracle product.",
    points: [
      "I have designed and developed the UI and backend of the application and used functional reusable react components, React Hooks & Styled components. For product and user info, used Spring Boot Rest API, and integrated with IPSA DB.",
      "I have implemented 2 new Service SIPT and GIPT.",
      "I have developed a util runnable jar file to find data from DB.",
    ],
  },
];
export const educations = [
  {
    id: uuid(),
    years: "2011-2012",
    heading: "BBS Vidya Mandir Kadilpur, Prayagraj, U.P",
    body: "Secondary (X) CPGA: 9.",
  },
  {
    id: uuid(),
    years: "2013-2014",
    heading: "BBS Vidya Mandir Kadilpur, Prayagraj, U.P",
    body: "Senior Secondary (XII) Percentage: 76.8%.",
  },
  {
    id: uuid(),
    years: "2015-2019",
    heading: "UNITED COLLEGE OF ENGG. & RESEARCH - Prayagraj, U.P",
    body: "Bachelor of Technology (Hons.) Information Technology Percentage: 72.56%.",
  },
];

export const skills = [
  {
    id: uuid(),
    heading: "Languages",
    body: " JAVA(Intermediate), JavaScript (Intermediate).",
  },
  {
    id: uuid(),
    heading: "Databases",
    body: " MongoDB, DynamoDB and Oracle.",
  },
  {
    id: uuid(),
    heading: "Web Development",
    body: " HTML, CSS.",
  },
  {
    id: uuid(),
    heading: "UI Library",
    body: " React JS.",
  },
  {
    id: uuid(),
    heading: "Backend Framework",
    body: " Spring Boot, Node JS.",
  },
  {
    id: uuid(),
    heading: "Tools & VCS",
    body: " VS Code, Git, IntelliJ, eclipse.",
  },
  {
    id: uuid(),
    heading: "Other",
    body: " Jira, KAFKA, AWS Services like S3, Lambda, API Gateway, ELB, CloudFormation, EC2, DynamoDB, SNS,SQS, AWS Kineses etc",
  },
];
