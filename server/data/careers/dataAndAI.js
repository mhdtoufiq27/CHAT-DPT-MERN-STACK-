/**
 * Data & AI Career Roles (8 Roles)
 */

const dataAndAIRoles = [
  {
    id: "data-analyst",
    careerFamily: "DATA & AI",
    roleName: "Data Analyst",
    slug: "data-analyst",
    badge: "High Demand",
    shortDescription: "Extracts insights from structured data using SQL, Python/R, Excel, and Power BI/Tableau.",
    description: "A Data Analyst collects, cleans, and analyzes organizational data to discover trends, answer business questions, and build interactive KPI dashboards. They turn complex raw data into actionable visual insights for decision-makers.",
    targetAudience: ["BCA", "B.Tech", "B.E.", "MCA", "B.Sc (CS/IT)", "M.Tech"],
    salaryRange: { entry: "₹4 - ₹7.5 LPA", mid: "₹8 - ₹16 LPA", senior: "₹18 - ₹35+ LPA" },
    responsibilities: [
      "Write complex SQL queries (Window functions, CTEs, Joins) to extract data from enterprise databases.",
      "Clean, transform, and wrangle dirty datasets using Python (Pandas) or Excel.",
      "Design and maintain interactive business intelligence dashboards in Power BI or Tableau.",
      "Perform exploratory data analysis (EDA) to identify business trends, churn factors, and revenue growth.",
      "Communicate data-driven recommendations clearly to stakeholders and management."
    ],
    prerequisites: [
      { name: "Basic Mathematics & Statistics", desc: "Mean, Median, Mode, Standard Deviation, Percentiles, Correlation.", required: true },
      { name: "Spreadsheet Basics (Excel)", desc: "Formulas, VLOOKUP/XLOOKUP, Pivot Tables, basic charts.", required: true },
      { name: "Logical Problem Solving", desc: "Ability to break business questions into analytical steps.", required: true },
      { name: "Basic Computer Literacy", desc: "File formats (CSV, JSON, Excel), database table concepts.", required: true }
    ],
    technologies: [
      { name: "SQL (PostgreSQL / MySQL / BigQuery)", category: "Query Language", priority: "MUST LEARN", description: "Joins, GROUP BY, Aggregate functions, CTEs, Window functions (ROW_NUMBER, RANK, LEAD/LAG)." },
      { name: "Advanced Excel", category: "Spreadsheets", priority: "MUST LEARN", description: "XLOOKUP, INDEX-MATCH, Pivot Tables, Power Query, Conditional Formatting." },
      { name: "Power BI / Tableau", category: "BI & Visualization", priority: "MUST LEARN", description: "DAX formulas, data modeling, interactive dashboards, KPI reports." },
      { name: "Python for Data Analysis", category: "Programming", priority: "MUST LEARN", description: "Pandas, NumPy, Matplotlib, Seaborn for data wrangling and visualization." },
      { name: "Exploratory Data Analysis (EDA)", category: "Data Science", priority: "HIGH PRIORITY", description: "Data profiling, handling missing values, outlier detection, correlation analysis." },
      { name: "Business Statistics & A/B Testing", category: "Statistics", priority: "HIGH PRIORITY", description: "Hypothesis testing, p-values, confidence intervals, A/B experiment evaluation." },
      { name: "Data Storytelling & Reporting", category: "Communication", priority: "HIGH PRIORITY", description: "Translating data insights into executive slide decks and narratives." },
      { name: "Data Warehousing Basics", category: "Data Architecture", priority: "GOOD TO KNOW", description: "Star schema, Snowflake schema, fact and dimension tables." },
      { name: "Git & GitHub for Data", category: "Version Control", priority: "GOOD TO KNOW", description: "Version controlling Jupyter notebooks and SQL scripts." },
      { name: "Machine Learning Basics (Scikit-Learn)", category: "Advanced", priority: "OPTIONAL / LATER", description: "Basic linear regression and classification modeling." }
    ],
    tools: [
      { name: "Power BI Desktop / Tableau", priority: "MUST LEARN", purpose: "Building interactive visual dashboards." },
      { name: "PostgreSQL / DBeaver", priority: "MUST LEARN", purpose: "Executing and optimizing SQL queries." },
      { name: "Jupyter Notebook / Google Colab", priority: "MUST LEARN", purpose: "Interactive Python data exploration." },
      { name: "Microsoft Excel", priority: "MUST LEARN", purpose: "Rapid data modeling and pivot table analysis." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-3", focus: "Excel Mastery & Descriptive Statistics", topics: ["Excel Formulas, XLOOKUP, Nested IF, Index-Match", "Pivot Tables, Slicers, and Data Validation", "Descriptive Statistics: Central Tendency, Dispersion, Normal Distribution"], milestone: "Build an executive financial summary dashboard purely in Excel." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 4-8", focus: "Advanced SQL for Data Analytics", topics: ["SELECT, WHERE, GROUP BY, HAVING, ORDER BY", "Multi-table Joins (INNER, LEFT, RIGHT, FULL, SELF)", "Subqueries, Common Table Expressions (WITH CTEs)", "Window Functions: ROW_NUMBER(), DENSE_RANK(), LAG(), LEAD(), SUM() OVER()"], milestone: "Solve 50+ real-world business SQL challenges on LeetCode/StrataScratch." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "BI Dashboard Tools (Power BI / Tableau)", topics: ["Connecting to data sources (SQL, Excel, Web APIs)", "Data Modeling: Star Schema, Relationships (1-to-many)", "DAX Basics: CALCULATE, RELATED, SUMX, Time Intelligence functions", "Designing interactive visual storytelling dashboards"], milestone: "Publish an interactive 3-page Power BI sales dashboard with drill-down filters." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "Python for Data Analysis (Pandas/NumPy)", topics: ["NumPy arrays and vectorized calculations", "Pandas DataFrames: Filtering, GroupBy, Merging, Melting, Pivot tables", "Data Cleaning: Imputing missing values, removing duplicates, datatype casting", "Data Visualization with Matplotlib & Seaborn"], milestone: "Perform an end-to-end Exploratory Data Analysis (EDA) on a messy 100k+ row dataset." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "Applied Statistics & A/B Testing", topics: ["Inferential Statistics: Central Limit Theorem, Standard Error", "Hypothesis Testing: T-Tests, Chi-Square tests, ANOVA", "A/B Testing design: Sample size determination, p-values, conversion uplift", "Cohort Analysis & Customer Lifetime Value (CLV) calculation"], milestone: "Evaluate a simulated e-commerce A/B test and write an executive decision report." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Portfolio Projects with Business Impact", topics: ["Customer Churn Analysis and segmentation", "E-Commerce Revenue & Cohort Retention", "Healthcare / Financial operations KPI tracking"], milestone: "Complete 3 end-to-end data analytics case study projects." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "Data Portfolio & Dashboard Links", topics: ["NovyPro / Tableau Public profile with live embedded dashboards", "GitHub repository with documented SQL scripts and Jupyter notebooks", "Writing LinkedIn case studies highlighting actionable business ROI"], milestone: "A published portfolio showcasing interactive dashboards and SQL scripts." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "SQL Live Coding & Business Case Rounds", topics: ["Live SQL coding rounds (Window functions, retention rate queries)", "Business metric definition (CAC, LTV, Churn rate, ARPU)", "Explaining dashboard DAX/LOD calculations to interviewers"], milestone: "Pass simulated live SQL coding tests within 30-minute limits." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Applications & Placement", topics: ["Resume tailored to Data Analyst / BI Analyst roles", "Applying to analytics consulting (Mu Sigma, Fractal, Tiger) and product teams", "Mock behavioral and case study interviews"], milestone: "Secure employment as an Associate / Junior Data Analyst." }
    ],
    projects: [
      { tier: "Beginner", title: "E-Commerce Sales Performance & KPI Dashboard", tech: ["Power BI", "Excel", "DAX"], description: "Interactive dashboard tracking gross revenue, monthly growth, regional performance, and top product categories." },
      { tier: "Intermediate", title: "Telecom Customer Churn & Retention Analysis", tech: ["Python", "Pandas", "Seaborn", "PostgreSQL", "SQL"], description: "Identifies primary drivers of customer attrition using SQL cohort queries and Python exploratory analysis." },
      { tier: "Production / Capstone", title: "Digital Banking User Engagement & A/B Test Evaluation", tech: ["SQL (PostgreSQL)", "Python", "Tableau Public", "Statistical Testing"], description: "Full statistical analysis of a new app onboarding flow, calculating conversion uplift, confidence intervals, and executive recommendations." }
    ],
    certifications: [
      { name: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)", issuer: "Microsoft" },
      { name: "Google Data Analytics Professional Certificate", issuer: "Google (Coursera)" }
    ],
    interviewTopics: [
      { category: "SQL & Query Optimization", topics: ["Difference between WHERE and HAVING clause", "Explain Window functions: ROW_NUMBER() vs RANK() vs DENSE_RANK()", "How to calculate 7-day moving average and month-over-month growth in SQL", "Types of JOINS and handling NULL values in JOIN conditions"] },
      { category: "Business Analytics & Metrics", topics: ["How to define and measure Customer Churn Rate and LTV", "What is an A/B Test and how to interpret a p-value of 0.03?", "Handling skewed data and when to use Median over Mean", "Difference between Correlation and Causation with real-world examples"] }
    ],
    relatedRoles: ["Data Scientist", "Business Analyst", "Data Engineer", "Product Analyst"]
  },

  {
    id: "data-scientist",
    careerFamily: "DATA & AI",
    roleName: "Data Scientist",
    slug: "data-scientist",
    badge: "High Demand",
    shortDescription: "Builds predictive statistical models, machine learning algorithms, and deep data experiments.",
    description: "A Data Scientist combines mathematics, statistics, computer science, and machine learning to build predictive models and extract deep patterns from complex data. They formulate hypotheses, engineer features, train ML algorithms, and deploy models into production systems.",
    targetAudience: ["B.Tech", "B.E.", "MCA", "M.Tech", "Computer Science", "Data Science"],
    salaryRange: { entry: "₹6 - ₹12 LPA", mid: "₹12 - ₹24 LPA", senior: "₹26 - ₹55+ LPA" },
    responsibilities: [
      "Formulate business questions into machine learning problems and statistical experiments.",
      "Clean, transform, and engineer features from structured and unstructured datasets.",
      "Train, tune, and evaluate Supervised and Unsupervised Machine Learning algorithms.",
      "Build Deep Learning models (NLP/Computer Vision) using PyTorch or TensorFlow.",
      "Deploy models as REST API endpoints and track model drift in production."
    ],
    prerequisites: [
      { name: "Python Programming", desc: "Functions, OOP, list comprehensions, data structures, and script modularization.", required: true },
      { name: "Mathematics & Statistics", desc: "Linear Algebra (Vectors, Matrices), Calculus (Gradients), Probability distributions.", required: true },
      { name: "SQL & Data Extraction", desc: "Writing complex queries to pull training datasets from relational databases.", required: true },
      { name: "Data Analysis Fundamentals", desc: "Experience with Pandas, NumPy, and exploratory data analysis.", required: true }
    ],
    technologies: [
      { name: "Python (NumPy, Pandas, SciPy)", category: "Language & Math", priority: "MUST LEARN", description: "Scientific computing, matrix operations, and data frame manipulation." },
      { name: "Machine Learning (Scikit-Learn)", category: "Core ML", priority: "MUST LEARN", description: "Regression, Classification, Clustering, Random Forests, XGBoost, LightGBM." },
      { name: "Statistical Modeling & Probability", category: "Math/Stats", priority: "MUST LEARN", description: "Bayesian probability, Hypothesis testing, ANOVA, distributions, feature selection." },
      { name: "Deep Learning (PyTorch / TensorFlow)", category: "Deep Learning", priority: "MUST LEARN", description: "Neural networks, backpropagation, CNNs, RNNs/LSTMs, Transformers." },
      { name: "Feature Engineering & Preprocessing", category: "Data Prep", priority: "HIGH PRIORITY", description: "Imputation, One-Hot/Target Encoding, Scaling, PCA dimensionality reduction." },
      { name: "Model Evaluation & Validation", category: "Metrics", priority: "HIGH PRIORITY", description: "Cross-validation, ROC-AUC, Precision/Recall, F1-Score, Confusion Matrix, SHAP values." },
      { name: "SQL & Data Warehouses", category: "Data Access", priority: "HIGH PRIORITY", description: "Querying enterprise data from PostgreSQL, Snowflake, or BigQuery." },
      { name: "Model Deployment (FastAPI / Streamlit)", category: "Deployment", priority: "HIGH PRIORITY", description: "Serving ML models as REST APIs or interactive web demonstrations." },
      { name: "MLOps Basics (MLflow / DVC)", category: "MLOps", priority: "GOOD TO KNOW", description: "Experiment tracking, model registry, and dataset versioning." },
      { name: "Generative AI & LLM Fine-Tuning", category: "GenAI", priority: "GOOD TO KNOW", description: "Hugging Face, Prompt engineering, RAG pipelines, fine-tuning." }
    ],
    tools: [
      { name: "JupyterLab / VS Code", priority: "MUST LEARN", purpose: "Interactive notebook and production code development." },
      { name: "Git & GitHub", priority: "MUST LEARN", purpose: "Version control for ML code and experiment pipelines." },
      { name: "MLflow / Weights & Biases", priority: "HIGH PRIORITY", purpose: "Tracking hyperparameters, metrics, and model artifacts." },
      { name: "Docker", priority: "HIGH PRIORITY", purpose: "Containerizing model inference services." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "Math for ML & Advanced Python", topics: ["Linear Algebra: Vectors, Dot Products, Matrices, Eigenvalues", "Multivariate Calculus: Partial Derivatives, Gradients, Chain Rule", "Probability: Bayes Theorem, Continuous & Discrete Distributions", "NumPy Vectorization and Pandas Performance Optimization"], milestone: "Implement Gradient Descent and Linear Regression from scratch without libraries." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-9", focus: "Supervised & Unsupervised ML Mastery", topics: ["Linear/Logistic Regression, Decision Trees, KNN", "Ensemble Methods: Random Forests, Gradient Boosting (XGBoost, LightGBM, CatBoost)", "Clustering: K-Means, DBSCAN, Hierarchical Clustering", "Dimensionality Reduction: PCA, t-SNE", "Cross-Validation and Hyperparameter Tuning (Optuna, GridSearchCV)"], milestone: "Compete in a Kaggle competition achieving top 20% validation score." },
      { step: 3, phase: "TOOLS", duration: "Week 10", focus: "Experiment Tracking & MLflow", topics: ["Setting up MLflow for metric tracking and model logging", "Dataset versioning with DVC", "Writing reproducible ML pipelines"], milestone: "Build an automated ML training pipeline logging parameters and ROC-AUC curves to MLflow." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 11-15", focus: "Deep Learning with PyTorch", topics: ["Neural Network Architecture: Perceptrons, Activation Functions (ReLU, Softmax)", "Backpropagation and Optimizers (Adam, SGD, Learning Rate Schedulers)", "Convolutional Neural Networks (CNNs) for Image Classification", "Recurrent Networks (LSTM, GRU) and Attention Mechanism basics"], milestone: "Train and evaluate a custom PyTorch image or text classifier achieving 90%+ accuracy." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 16-19", focus: "Transformers, NLP & Model Explainability", topics: ["Hugging Face Transformers (BERT, RoBERTa, T5)", "Model Interpretability with SHAP and LIME values", "Imbalanced Data Handling (SMOTE, Class weights, Focal Loss)", "Serving predictions via FastAPI REST endpoints"], milestone: "Deploy a production-ready ML API with SHAP feature importance explanations." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 20-22", focus: "End-to-End Applied ML Systems", topics: ["Credit Risk / Loan Default Prediction", "Customer Lifetime Value & Churn Forecasting", "Medical Image Classification or NLP Sentiment Engine"], milestone: "Ship 3 comprehensive end-to-end Data Science projects with live APIs." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 23", focus: "Kaggle & GitHub Portfolio", topics: ["Kaggle notebook publications with detailed markdown explanations", "GitHub repositories structured with clean `src/`, `data/`, `models/` folders", "Medium/Substack technical articles explaining your findings"], milestone: "A professional Data Science portfolio with Kaggle medals and GitHub links." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 24-25", focus: "ML Theory & Case Studies", topics: ["Bias-Variance Tradeoff and Regularization (L1 Lasso vs L2 Ridge)", "Math behind XGBoost (Split criterion, shrinkage, regularization)", "Evaluation metrics selection (When to use PR-AUC over ROC-AUC?)", "Data Science System Design (Design a Recommendation Engine / Fraud Detector)"], milestone: "Master theoretical ML whiteboard interviews and math derivations." },
      { step: 9, phase: "JOB READINESS", duration: "Week 26+", focus: "Industry Placement", topics: ["Data Scientist ATS resume highlighting business metrics and model metrics", "Networking with Data Science managers and AI labs", "Mock technical interviews"], milestone: "Secure employment as an Associate / Junior Data Scientist." }
    ],
    projects: [
      { tier: "Beginner", title: "Real Estate House Price Valuation Engine", tech: ["Python", "Scikit-Learn", "Pandas", "XGBoost", "Streamlit"], description: "Feature engineering on location/amenities data, hyperparameter tuned XGBoost model with interactive Streamlit UI." },
      { tier: "Intermediate", title: "Banking Credit Default Risk & Explainability Platform", tech: ["Python", "LightGBM", "SHAP", "FastAPI", "Imbalanced-Learn"], description: "Predicts probability of loan default on imbalanced credit data, outputting individual feature contribution explanations via SHAP." },
      { tier: "Production / Capstone", title: "Customer Churn Prediction API & MLOps Pipeline", tech: ["PyTorch / Scikit-Learn", "FastAPI", "MLflow", "Docker", "PostgreSQL"], description: "End-to-end automated pipeline: data ingestion, training, MLflow model registry, containerized FastAPI inference, and drift monitoring." }
    ],
    certifications: [
      { name: "TensorFlow Developer Certificate / PyTorch Certificate", issuer: "Google / DeepLearning.AI" },
      { name: "IBM Data Science Professional Certificate", issuer: "IBM (Coursera)" }
    ],
    interviewTopics: [
      { category: "ML Theory & Math", topics: ["Explain the Bias-Variance tradeoff with mathematical formulation", "How does Random Forest reduce variance while Boosting reduces bias?", "Difference between L1 (Lasso) and L2 (Ridge) regularization and feature sparsity", "Why is Precision-Recall AUC preferred over ROC-AUC for imbalanced datasets?"] },
      { category: "System Design & Practical ML", topics: ["How would you detect and handle Concept Drift and Data Drift in production?", "Design an end-to-end Recommendation System for an e-commerce platform", "How to handle missing data when 40% of a critical column is absent?", "Explain how self-attention works in Transformer models"] }
    ],
    relatedRoles: ["Machine Learning Engineer", "Data Analyst", "Data Engineer", "AI Engineer"]
  },

  {
    id: "data-engineer",
    careerFamily: "DATA & AI",
    roleName: "Data Engineer",
    slug: "data-engineer",
    badge: "Highest Demand",
    shortDescription: "Constructs scalable data pipelines, data lakes, streaming architectures, and distributed warehouses.",
    description: "A Data Engineer designs, builds, and maintains the data infrastructure and ETL/ELT pipelines that deliver clean, reliable, high-volume data to Data Scientists, Analysts, and downstream software applications. They master distributed computing, data warehousing, and workflow orchestration.",
    targetAudience: ["B.Tech", "B.E.", "MCA", "M.Tech", "Computer Science", "Information Technology"],
    salaryRange: { entry: "₹6 - ₹11 LPA", mid: "₹12 - ₹22 LPA", senior: "₹24 - ₹50+ LPA" },
    responsibilities: [
      "Design and build reliable batch and real-time streaming data pipelines using Apache Spark, Kafka, and Python/SQL.",
      "Architect and optimize cloud data warehouses (Snowflake, BigQuery, Redshift) using star/snowflake schemas.",
      "Orchestrate complex DAG workflows and dependency schedules using Apache Airflow.",
      "Ensure data quality, governance, lineage, and idempotency across data lakehouse architectures (Delta Lake, Iceberg).",
      "Model dimensional data marts and implement transformation layers with dbt (data build tool)."
    ],
    prerequisites: [
      { name: "Python & SQL Mastery", desc: "Expertise in writing advanced SQL (Joins, Window functions, Aggregations) and Python scripts.", required: true },
      { name: "Relational & NoSQL Databases", desc: "PostgreSQL, MySQL, indexing, query execution plans, and schemas.", required: true },
      { name: "Linux & Command Line", desc: "Bash scripting, file permissions, cron jobs, and SSH.", required: true },
      { name: "Git & Version Control", desc: "Branching, committing, and collaborating on code.", required: true }
    ],
    technologies: [
      { name: "Advanced SQL & Data Modeling", category: "Querying & Modeling", priority: "MUST LEARN", description: "Dimensional modeling (Kimball), Star/Snowflake schemas, Fact/Dimension tables." },
      { name: "Python for Data Engineering", category: "Language", priority: "MUST LEARN", description: "PySpark, Pandas, API extraction, automation, and data wrangling." },
      { name: "Distributed Computing (Apache Spark / PySpark)", category: "Big Data Processing", priority: "MUST LEARN", description: "DataFrames, RDDs, distributed joins, partitioning, shuffling, caching." },
      { name: "Cloud Data Warehouse (Snowflake / BigQuery)", category: "Data Warehouse", priority: "MUST LEARN", description: "Columnar storage, partitioning, clustering keys, micro-partitions." },
      { name: "Data Transformation (dbt - Data Build Tool)", category: "ELT & Quality", priority: "HIGH PRIORITY", description: "SQL-first data modeling, testing, documentation, and lineage DAGs." },
      { name: "Workflow Orchestration (Apache Airflow)", category: "Orchestration", priority: "HIGH PRIORITY", description: "DAG design, operators, sensors, task retries, scheduling." },
      { name: "Streaming Data (Apache Kafka / Spark Streaming)", category: "Streaming", priority: "HIGH PRIORITY", description: "Producers, consumers, topics, partitions, event-driven streaming pipelines." },
      { name: "Lakehouse Storage (Delta Lake / Apache Iceberg)", category: "Lakehouse", priority: "GOOD TO KNOW", description: "ACID transactions on object storage (AWS S3, GCP Cloud Storage)." },
      { name: "Docker & CI/CD", category: "DevOps", priority: "GOOD TO KNOW", description: "Containerizing pipelines and automated deployment via GitHub Actions." },
      { name: "Cloud Platforms (AWS / GCP / Azure)", category: "Cloud", priority: "HIGH PRIORITY", description: "S3, Glue, Athena, EMR, BigQuery, Cloud Storage." }
    ],
    tools: [
      { name: "Apache Airflow", priority: "MUST LEARN", purpose: "Orchestrating and monitoring ETL workflow DAGs." },
      { name: "Snowflake / BigQuery", priority: "MUST LEARN", purpose: "Cloud data warehousing and analytical querying." },
      { name: "Docker Desktop", priority: "MUST LEARN", purpose: "Local orchestration of Airflow, Postgres, and Kafka." },
      { name: "dbt Core / Cloud", priority: "HIGH PRIORITY", purpose: "Modular SQL transformation and testing." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "Advanced SQL & Dimensional Modeling", topics: ["Complex SQL: CTEs, Window functions, Self Joins, Pivot tables", "Kimball Dimensional Modeling: Fact tables, Dimension tables, Conformed dimensions", "Slowly Changing Dimensions (SCD Type 1, Type 2, Type 3)", "ACID properties and indexing in relational databases"], milestone: "Design a complete Kimball star-schema data warehouse for an e-commerce platform." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-9", focus: "Python ETL & Apache Airflow", topics: ["Building Python ETL extractors fetching data from REST APIs to PostgreSQL", "Apache Airflow Architecture (Scheduler, Webserver, Worker, Metadata DB)", "Authoring Airflow DAGs: PythonOperator, BashOperator, PostgresOperator", "Task dependencies, retries, SLAs, and catchup parameters"], milestone: "Build an automated Airflow DAG extracting public API data daily into a database." },
      { step: 3, phase: "TOOLS", duration: "Week 10", focus: "Dockerizing Big Data Environments", topics: ["Docker Compose setup for Apache Airflow, PostgreSQL, and Redis", "Managing environment variables and connection secrets in Airflow"], milestone: "Spin up a complete local Airflow and Postgres stack using Docker Compose." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 11-15", focus: "Apache Spark & PySpark", topics: ["Spark Architecture: Driver, Executors, Cluster Manager", "PySpark DataFrames, Transformations vs Actions", "Handling Shuffling, Skewed Partitions, and Broadcast Joins", "Connecting PySpark to Cloud Object Storage (S3 / GCS)"], milestone: "Process and aggregate a 50GB dataset using PySpark with broadcast joins." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 16-19", focus: "Cloud Data Warehouse (Snowflake) & dbt", topics: ["Snowflake Architecture: Cloud Services, Virtual Warehouses, Storage", "Loading data via COPY INTO and Snowpipe", "dbt Models: Staging, Intermediate, and Marts layers", "Writing automated data tests and documentation in dbt"], milestone: "Build an end-to-end ELT pipeline in Snowflake with dbt transformations and tests." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 20-22", focus: "Real-Time & Batch Data Pipelines", topics: ["Event-driven streaming with Apache Kafka and Spark Streaming", "Delta Lake ACID transactions and time-travel querying", "Automated data quality monitoring and alerting"], milestone: "Complete 3 production data engineering capstone projects." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 23", focus: "Data Architecture Portfolio", topics: ["GitHub repository with complete architecture diagrams", "Dockerized one-click reproduction scripts", "Well-documented README with DAG flowcharts"], milestone: "A professional GitHub portfolio showcasing scalable data pipelines." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 24-25", focus: "Data Engineering System Design", topics: ["Design a Batch vs Real-Time Data Pipeline (e.g. Uber Ride Telemetry)", "Explain Spark memory management and handling Out-Of-Memory (OOM) errors", "Idempotent pipeline design and deduplication strategies", "Row-oriented vs Columnar storage formats (Parquet vs ORC vs CSV)"], milestone: "Pass technical data engineering system design interviews." },
      { step: 9, phase: "JOB READINESS", duration: "Week 26+", focus: "Career Launch", topics: ["Resume targeting Data Engineer / ETL Developer roles", "Outreach to data engineering managers and tech recruiters", "Mock interviews"], milestone: "Secure employment as an Associate / Junior Data Engineer." }
    ],
    projects: [
      { tier: "Beginner", title: "Automated Crypto & Stock Market ETL Pipeline", tech: ["Python", "PostgreSQL", "Apache Airflow", "Docker"], description: "Scheduled Airflow DAG extracting hourly financial market data via REST APIs, cleaning records, and persisting to PostgreSQL." },
      { tier: "Intermediate", title: "Cloud Data Warehouse & Analytics Mart with Snowflake and dbt", tech: ["Snowflake", "dbt", "SQL", "S3", "GitHub Actions"], description: "Staging and marts ELT pipeline transforming raw e-commerce event streams with automated schema tests and documentation." },
      { tier: "Production / Capstone", title: "Real-Time Clickstream Analytics Pipeline with Kafka & Spark", tech: ["Apache Kafka", "PySpark Streaming", "Delta Lake", "Snowflake", "Docker Compose"], description: "Processes 5,000+ simulated clickstream events/sec through Kafka into Delta Lake on S3 with real-time aggregation." }
    ],
    certifications: [
      { name: "SnowPro Core Certification", issuer: "Snowflake" },
      { name: "Databricks Certified Data Engineer Associate", issuer: "Databricks" }
    ],
    interviewTopics: [
      { category: "Distributed Systems & Spark", topics: ["How does Apache Spark handle data shuffling during Wide Transformations (groupBy)?", "What causes Out-Of-Memory (OOM) errors in Spark and how to fix them with partitioning?", "Difference between Row-oriented (CSV, JSON) and Columnar (Parquet) formats", "What is Broadcast Join in PySpark and when should it be used?"] },
      { category: "Pipeline Architecture & Modeling", topics: ["How do you make an ETL pipeline idempotent?", "SCD Type 1 vs SCD Type 2 vs SCD Type 3 implementation with SQL", "How Kafka partitions guarantee message ordering across consumer groups", "Star Schema vs Snowflake Schema trade-offs in modern cloud warehouses"] }
    ],
    relatedRoles: ["Data Scientist", "Backend Developer", "Cloud Engineer", "Database Administrator"]
  },

  {
    id: "machine-learning-engineer",
    careerFamily: "DATA & AI",
    roleName: "Machine Learning Engineer",
    slug: "machine-learning-engineer",
    badge: "High Demand",
    shortDescription: "Builds, optimizes, deploys, and scales machine learning models in production environments.",
    description: "A Machine Learning Engineer bridges the gap between theoretical data science and production software engineering. They take trained machine learning and deep learning models, optimize them for low-latency inference, package them in containers, and build automated CI/CD/CT (Continuous Training) MLOps pipelines.",
    targetAudience: ["B.Tech", "B.E.", "MCA", "M.Tech", "Computer Science"],
    salaryRange: { entry: "₹7 - ₹13 LPA", mid: "₹14 - ₹26 LPA", senior: "₹28 - ₹60+ LPA" },
    responsibilities: [
      "Productionize, optimize, and serve ML/DL models with sub-50ms latency (FastAPI, Triton, ONNX).",
      "Build automated end-to-end MLOps pipelines (Data validation, Model Training, Model Registry, Deployment).",
      "Monitor model drift, data drift, latency, and throughput in live production environments.",
      "Optimize model inference size and speed using quantization, pruning, and TensorRT.",
      "Collaborate with Data Scientists and Software Engineers to integrate AI into scalable web/mobile services."
    ],
    prerequisites: [
      { name: "Strong Python & Software Engineering", desc: "OOP, modular design, clean code, unit testing, and design patterns.", required: true },
      { name: "Machine Learning Fundamentals", desc: "Scikit-Learn, PyTorch, loss functions, optimization algorithms.", required: true },
      { name: "Docker & Linux", desc: "Writing Dockerfiles, multi-stage builds, bash scripting.", required: true },
      { name: "Data Structures & Algorithms", desc: "Proficiency in DSA for writing performant, scalable code.", required: true }
    ],
    technologies: [
      { name: "Python & C++ Basics", category: "Language", priority: "MUST LEARN", description: "High-performance Python, type hints, C++ bindings for fast inference." },
      { name: "PyTorch & Scikit-Learn", category: "ML Frameworks", priority: "MUST LEARN", description: "Deep learning model training, custom datasets, dataloaders, distributed training." },
      { name: "Model Serving (FastAPI / Triton / TorchServe)", category: "Inference Serving", priority: "MUST LEARN", description: "High-concurrency REST/gRPC model serving with batching." },
      { name: "Docker & Containerization", category: "DevOps", priority: "MUST LEARN", description: "Containerizing PyTorch/CUDA environments for reproducible deployments." },
      { name: "MLOps & Tracking (MLflow / W&B)", category: "MLOps", priority: "HIGH PRIORITY", description: "Experiment tracking, model registry, artifact storage, hyperparameter logging." },
      { name: "Model Optimization (ONNX / TensorRT / Quantization)", category: "Optimization", priority: "HIGH PRIORITY", description: "Converting PyTorch models to ONNX/TensorRT for 3-5x inference speedups." },
      { name: "Feature Stores & Data Validation (Feast / Great Expectations)", category: "Data Quality", priority: "GOOD TO KNOW", description: "Consistent feature serving across training and real-time inference." },
      { name: "Kubernetes & Kubeflow", category: "Orchestration", priority: "GOOD TO KNOW", description: "Container orchestration for distributed ML pipelines." },
      { name: "Monitoring & Drift Detection (Evidently AI / Prometheus)", category: "Observability", priority: "HIGH PRIORITY", description: "Monitoring data drift, concept drift, latency, and model accuracy degradation." },
      { name: "Cloud ML Platforms (AWS SageMaker / GCP Vertex AI)", category: "Cloud AI", priority: "HIGH PRIORITY", description: "Managed training clusters, endpoint deployment, and auto-scaling." }
    ],
    tools: [
      { name: "Docker & Docker Compose", priority: "MUST LEARN", purpose: "Containerizing ML inference engines." },
      { name: "MLflow / Weights & Biases", priority: "MUST LEARN", purpose: "Model registry and experiment tracking." },
      { name: "VS Code & Git", priority: "MUST LEARN", purpose: "Engineering IDE and version control." },
      { name: "Postman / k6", priority: "HIGH PRIORITY", purpose: "API testing and load testing model inference endpoints." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "Production Python & PyTorch Mastery", topics: ["Modular Python: OOP, Type Annotations, Pydantic, Design Patterns", "PyTorch deep dive: Tensors, Autograd, Custom Datasets & DataLoaders", "Writing unit tests for data transforms and model layers with PyTest"], milestone: "Build a modular, tested PyTorch training pipeline with config files (YAML/Hydra)." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "High-Performance Model Serving", topics: ["FastAPI for ML inference: Async endpoints, request batching", "Handling image/audio/text payloads and tensor transformations", "Benchmarking latency and throughput with k6 load testing"], milestone: "Deploy a PyTorch deep learning model as an asynchronous FastAPI microservice." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "Docker & MLflow Tracking", topics: ["Writing GPU/CPU Dockerfiles with multi-stage builds", "Setting up MLflow server for experiment tracking and Model Registry", "Versioning model weights as versioned artifacts"], milestone: "Containerize an ML serving API and log model runs to an MLflow Model Registry." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "Model Optimization (ONNX & Quantization)", topics: ["Exporting PyTorch models to ONNX runtime format", "Post-Training Quantization (FP32 to INT8) for reduced memory footprint", "Dynamic batching and latency reduction techniques"], milestone: "Optimize a BERT/ResNet model with ONNX, reducing latency by >50%." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "Continuous Training & Drift Monitoring", topics: ["Automated retraining pipelines triggered by data updates", "Data validation with Great Expectations", "Detecting Data Drift and Concept Drift with Evidently AI", "Deploying endpoints to AWS SageMaker or GCP Vertex AI"], milestone: "Build an automated pipeline that detects data drift and alerts for model retraining." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Production MLOps Systems", topics: ["Complete end-to-end MLOps pipeline with CI/CD via GitHub Actions", "Real-time streaming inference using Redis or Kafka", "Prometheus and Grafana metrics dashboards"], milestone: "Complete 3 production-ready MLOps engineering projects." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "Engineering Showcase", topics: ["GitHub repository with complete architecture diagrams and Dockerfiles", "Demonstrating latency benchmarks and load test results in README", "Live deployed demo endpoints with Swagger documentation"], milestone: "A professional ML Engineer portfolio showcasing high-throughput APIs." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "ML Systems & Software Engineering", topics: ["Machine Learning System Design (Design YouTube Video Recommendations / Visual Search)", "How to optimize model inference latency and memory footprints", "Online vs Offline feature store serving", "Data Structures & Algorithms coding practice"], milestone: "Pass ML System Design and coding interviews." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Career Placement", topics: ["ML Engineer resume highlighting latency reductions and production deployments", "Targeting AI startups, product companies, and research labs", "Mock technical interviews"], milestone: "Secure employment as an Associate / Junior Machine Learning Engineer." }
    ],
    projects: [
      { tier: "Beginner", title: "Containerized Computer Vision Inference API", tech: ["PyTorch", "FastAPI", "Docker", "Pydantic", "OpenCV"], description: "REST API accepting image uploads, running YOLO/ResNet inference, and returning JSON bounding boxes with sub-100ms latency." },
      { tier: "Intermediate", title: "ONNX-Optimized NLP Sentiment Analysis Microservice", tech: ["Hugging Face", "PyTorch", "ONNX Runtime", "FastAPI", "Docker"], description: "Quantized DistilBERT model exported to ONNX, achieving 3x speedup under simulated 500 req/sec load." },
      { tier: "Production / Capstone", title: "End-to-End MLOps Pipeline with Drift Monitoring & CI/CD", tech: ["PyTorch", "MLflow", "Evidently AI", "FastAPI", "Docker Compose", "GitHub Actions"], description: "Full automated pipeline: training, model registry, containerized inference, automated data drift detection, and CI/CD tests." }
    ],
    certifications: [
      { name: "AWS Certified Machine Learning – Specialty", issuer: "Amazon Web Services" },
      { name: "Google Professional Machine Learning Engineer", issuer: "Google Cloud" }
    ],
    interviewTopics: [
      { category: "ML Serving & Optimization", topics: ["How does INT8 Post-Training Quantization work and how does it affect accuracy?", "Difference between Batch Inference and Real-time Stream Inference", "What is ONNX runtime and how does it achieve cross-hardware optimization?", "How does Triton Inference Server handle dynamic request batching?"] },
      { category: "MLOps & System Design", topics: ["Design an automated system to detect Data Drift in real-time", "How to manage training/serving skew with a Feature Store", "Design a real-time Fraud Detection ML System with sub-30ms SLA", "Blue/Green deployment vs Canary deployment for machine learning models"] }
    ],
    relatedRoles: ["Data Scientist", "AI Engineer", "Data Engineer", "Backend Developer"]
  },

  {
    id: "ai-engineer",
    careerFamily: "DATA & AI",
    roleName: "AI Engineer",
    slug: "ai-engineer",
    badge: "High Demand",
    shortDescription: "Integrates AI models, foundation APIs, and intelligent pipelines into consumer & enterprise products.",
    description: "An AI Engineer focuses on the application layer of Artificial Intelligence, integrating state-of-the-art foundation models, computer vision APIs, NLP services, and speech recognition into real-world software applications and business workflows.",
    targetAudience: ["BCA", "B.Tech", "B.E.", "MCA", "M.Tech"],
    salaryRange: { entry: "₹6.5 - ₹12 LPA", mid: "₹13 - ₹24 LPA", senior: "₹26 - ₹55+ LPA" },
    responsibilities: [
      "Integrate multimodal AI capabilities (Text, Audio, Vision) into web, mobile, and backend systems.",
      "Design prompt pipelines, structured output validation, and fallback mechanisms for AI services.",
      "Fine-tune lightweight open-source models for domain-specific tasks and classification.",
      "Optimize API token costs, latency, and throughput across multiple AI providers.",
      "Ensure responsible AI safety, data privacy, and compliance."
    ],
    prerequisites: [
      { name: "Python & TypeScript", desc: "Solid programming skills in Python (FastAPI) and JavaScript/TypeScript.", required: true },
      { name: "REST API & JSON", desc: "Understanding HTTP status codes, webhooks, and asynchronous data flows.", required: true },
      { name: "Core AI Concepts", desc: "Embeddings, prompt engineering, tokenization, and temperature tuning.", required: true },
      { name: "Git Version Control", desc: "Collaborating on codebases with Git.", required: true }
    ],
    technologies: [
      { name: "Python & TypeScript", category: "Language", priority: "MUST LEARN", description: "Building AI backends and interactive frontend interfaces." },
      { name: "Foundation Model APIs (OpenAI, Gemini, Claude)", category: "AI Models", priority: "MUST LEARN", description: "Multimodal inference, function calling, structured schemas." },
      { name: "Embeddings & Semantic Search", category: "Vector AI", priority: "MUST LEARN", description: "Vector indexing, cosine similarity, retrieval algorithms." },
      { name: "FastAPI / Node.js Backend", category: "Backend", priority: "MUST LEARN", description: "High-speed async API endpoints and token streaming via SSE." },
      { name: "Vector Databases (Chroma / Pinecone)", category: "Vector Storage", priority: "HIGH PRIORITY", description: "Vector indexing and document search." },
      { name: "LangChain / LlamaIndex", category: "AI Frameworks", priority: "HIGH PRIORITY", description: "Chaining prompts, memory management, and data loaders." },
      { name: "Speech & Audio APIs (Whisper / ElevenLabs)", category: "Multimodal AI", priority: "HIGH PRIORITY", description: "Speech-to-Text and Text-to-Speech voice integration." },
      { name: "Computer Vision APIs (YOLO / Cloud Vision)", category: "Vision AI", priority: "GOOD TO KNOW", description: "Object detection, OCR, and image tagging." },
      { name: "Evaluation & Guardrails", category: "Safety", priority: "GOOD TO KNOW", description: "Validating output correctness and filtering harmful outputs." },
      { name: "Docker Containerization", category: "DevOps", priority: "HIGH PRIORITY", description: "Packaging AI microservices for cloud deployment." }
    ],
    tools: [
      { name: "VS Code", priority: "MUST LEARN", purpose: "Primary IDE." },
      { name: "Postman", priority: "MUST LEARN", purpose: "Testing AI streaming endpoints and JSON schemas." },
      { name: "Hugging Face Hub", priority: "HIGH PRIORITY", purpose: "Exploring and testing open weights models." },
      { name: "Docker", priority: "HIGH PRIORITY", purpose: "Containerization." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-3", focus: "AI Fundamentals & Prompt Architecture", topics: ["Tokens, Temperature, Top-P, Context Windows", "Structured Outputs via JSON Schema & Pydantic", "System Prompts, Few-shot prompting, and persona design"], milestone: "Build a structured AI data extraction API using OpenAI/Gemini SDK." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 4-7", focus: "Embeddings & Semantic Search", topics: ["Generating embeddings (text-embedding-3 / BGE)", "Vector distance metrics (Cosine vs Euclidean)", "Setting up ChromaDB & Pinecone", "Building a semantic document matching service"], milestone: "Build a semantic resume-job description matching tool." },
      { step: 3, phase: "TOOLS", duration: "Week 8", focus: "Tool Calling & Function Execution", topics: ["Configuring tool definitions in API payloads", "Executing external database queries and web searches via AI triggers", "Handling tool call errors and timeouts"], milestone: "Build an AI agent that executes live SQL queries against a database." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 9-13", focus: "Multimodal AI & Speech", topics: ["Transcribing audio files with Whisper API", "Text-to-Speech synthesis with ElevenLabs / Web Speech API", "Analyzing images with multimodal vision models (GPT-4o / Gemini Vision)"], milestone: "Build a voice-activated AI interview assistant with audio playback." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 14-17", focus: "Real-Time Streaming & Guardrails", topics: ["Server-Sent Events (SSE) token streaming in FastAPI/Node", "Input validation and PII filtering with Guardrails", "Managing multi-turn conversation memory efficiently"], milestone: "Build a real-time streaming conversational assistant with safety layers." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 18-20", focus: "Full-Stack AI Products", topics: ["Building responsive React/Next.js frontends for AI tools", "Handling network interruptions and token rate limits", "Cost optimization and model caching"], milestone: "Deploy 3 production-grade AI-powered web applications." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 21", focus: "Product Showcase", topics: ["Clean GitHub repositories with live demo URLs", "Video walkthroughs demonstrating AI capabilities", "Documenting architecture and token efficiency in README"], milestone: "A published portfolio showcasing 3 interactive AI web apps." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 22-23", focus: "AI Application Architecture", topics: ["How to design resilient AI applications with automated fallback models", "Strategies for mitigating hallucinations and prompt injections", "Cost modeling for high-traffic AI services"], milestone: "Pass technical AI engineering interviews." },
      { step: 9, phase: "JOB READINESS", duration: "Week 24+", focus: "Career Placement", topics: ["AI Engineer resume highlighting deployed products and token optimization", "Connecting with AI-first startups and innovation teams", "Mock interviews"], milestone: "Secure employment as an Associate / Junior AI Engineer." }
    ],
    projects: [
      { tier: "Beginner", title: "Automated Customer Support AI Agent", tech: ["Python", "FastAPI", "OpenAI / Gemini", "ChromaDB"], description: "Semantic FAQ knowledge retrieval with automated email response drafting." },
      { tier: "Intermediate", title: "Multimodal Medical Report & X-Ray Analyzer", tech: ["FastAPI", "Gemini 1.5 Pro Vision", "React", "Tailwind CSS"], description: "Uploads diagnostic lab PDFs and scans, extracting structured patient summaries with terminology explanations." },
      { tier: "Production / Capstone", title: "VoxAI - Autonomous Voice-Driven Technical Interviewer", tech: ["Next.js", "FastAPI", "Whisper", "WebSockets", "Server-Sent Events", "PostgreSQL"], description: "Full-duplex voice interview simulator assessing candidate technical responses in real-time." }
    ],
    certifications: [
      { name: "DeepLearning.AI AI for Everyone & LangChain Certificate", issuer: "DeepLearning.AI" },
      { name: "Microsoft Certified: Azure AI Engineer Associate (AI-102)", issuer: "Microsoft" }
    ],
    interviewTopics: [
      { category: "AI Architecture", topics: ["How to implement structured JSON output enforcement in LLM pipelines", "Strategies to optimize latency: Streaming vs pre-fetching vs caching", "How to defend against Indirect Prompt Injection attacks", "Function calling mechanics and handling multi-step tool loops"] }
    ],
    relatedRoles: ["Generative AI Engineer", "Machine Learning Engineer", "Full Stack Developer", "Backend Developer"]
  },

  {
    id: "generative-ai-engineer",
    careerFamily: "DATA & AI",
    roleName: "Generative AI Engineer",
    slug: "generative-ai-engineer",
    badge: "Fastest Growing",
    shortDescription: "Builds production LLM applications, RAG pipelines, autonomous agents, and fine-tuned AI systems.",
    description: "A Generative AI Engineer specializes in developing intelligent applications using Large Language Models (LLMs), multimodal foundation models, Retrieval-Augmented Generation (RAG), autonomous agent frameworks (LangChain, LlamaIndex), and vector databases.",
    targetAudience: ["BCA", "B.Tech", "B.E.", "MCA", "M.Tech", "Computer Science"],
    salaryRange: { entry: "₹7 - ₹14 LPA", mid: "₹15 - ₹28 LPA", senior: "₹30 - ₹65+ LPA" },
    responsibilities: [
      "Architect and build production Retrieval-Augmented Generation (RAG) pipelines over enterprise documents.",
      "Integrate vector databases (Pinecone, Qdrant, Chroma, PGVector) for semantic similarity search.",
      "Develop multi-step autonomous AI agents using LangChain, LangGraph, and tool/function calling.",
      "Fine-tune open-source foundation models (Llama 3, Mistral) using LoRA / QLoRA techniques.",
      "Implement LLM guardrails, hallucination evaluation metrics (RAGAS), and token cost optimization."
    ],
    prerequisites: [
      { name: "Python Programming", desc: "Async Python, REST APIs, working with JSON and third-party SDKs.", required: true },
      { name: "Basics of NLP & Embeddings", desc: "Understanding text tokenization, vector embeddings, and cosine similarity.", required: true },
      { name: "Backend Web Development", desc: "FastAPI or Express for building client-facing AI endpoints.", required: true },
      { name: "Git Version Control", desc: "Branching, committing, and collaborating on code.", required: true }
    ],
    technologies: [
      { name: "Python & Async Programming", category: "Language", priority: "MUST LEARN", description: "Core language for LLM frameworks, streaming responses, and data pipelines." },
      { name: "LLM APIs (OpenAI, Anthropic, Gemini)", category: "Foundation Models", priority: "MUST LEARN", description: "Structured JSON outputs, function calling, system prompts, temperature tuning." },
      { name: "Vector Databases (Pinecone / Chroma / PGVector)", category: "Vector Storage", priority: "MUST LEARN", description: "Vector indexing (HNSW), cosine similarity, metadata filtering, hybrid search." },
      { name: "RAG Frameworks (LangChain / LlamaIndex)", category: "RAG Architecture", priority: "MUST LEARN", description: "Document chunking strategies, embeddings, rerankers, contextual compression." },
      { name: "Autonomous Agents & Tool Calling (LangGraph)", category: "AI Agents", priority: "HIGH PRIORITY", description: "Stateful agent graphs, cyclical workflows, tool execution, multi-agent teams." },
      { name: "Fine-Tuning (LoRA / QLoRA / Unsloth)", category: "Model Tuning", priority: "HIGH PRIORITY", description: "Parameter-efficient fine-tuning of open-source models (Llama 3, Mistral)." },
      { name: "RAG Evaluation & Guardrails (RAGAS / TruLens)", category: "Quality & Safety", priority: "HIGH PRIORITY", description: "Faithfulness, Answer Relevance, Context Recall, NeMo Guardrails." },
      { name: "FastAPI Streaming & SSE", category: "Serving", priority: "HIGH PRIORITY", description: "Server-Sent Events for real-time token streaming to frontend clients." },
      { name: "Open-Source LLMs (Ollama / vLLM)", category: "Local Serving", priority: "GOOD TO KNOW", description: "Self-hosting and high-throughput serving of open weights models." },
      { name: "Prompt Engineering & Few-Shot Learning", category: "Prompting", priority: "MUST LEARN", description: "Chain-of-Thought, ReAct prompting, structured schema extraction." }
    ],
    tools: [
      { name: "VS Code & JupyterLab", priority: "MUST LEARN", purpose: "Development environment." },
      { name: "LangSmith / Phoenix (Arize)", priority: "HIGH PRIORITY", purpose: "Tracing LLM execution steps, tokens, and latency." },
      { name: "Ollama", priority: "HIGH PRIORITY", purpose: "Running open-source LLMs locally on your workstation." },
      { name: "Postman", priority: "MUST LEARN", purpose: "Testing AI streaming endpoints." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-3", focus: "LLM Fundamentals & Prompt Engineering", topics: ["How LLMs work: Tokens, Context Windows, Next-Token Prediction", "Prompting Techniques: Zero-shot, Few-shot, Chain-of-Thought, ReAct", "OpenAI / Gemini SDKs: Structured JSON Outputs & Function Calling"], milestone: "Build a structured resume parsing and entity extraction tool with OpenAI/Gemini SDK." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 4-8", focus: "Embeddings & Vector Databases", topics: ["Text Embeddings: OpenAI text-embedding-3, HuggingFace embeddings", "Vector Databases: ChromaDB and PGVector setup", "Cosine Similarity, Euclidean Distance, and HNSW indexing", "Building your first semantic document search engine"], milestone: "Build a semantic search engine over 100+ PDF documents using ChromaDB." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "LangChain / LlamaIndex & Ollama", topics: ["LlamaIndex Document Loaders and Node Parsers", "LangChain LCEL (LangChain Expression Language)", "Running local models (Llama 3, Mistral) via Ollama"], milestone: "Build a local offline document Q&A tool running entirely on Ollama." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "Production RAG Architecture", topics: ["Chunking Strategies: Recursive, Semantic, Sliding Window", "Hybrid Search: Combining BM25 keyword search with Vector search", "Cross-Encoder Rerankers (Cohere Rerank, BGE Reranker)", "Evaluation metrics using RAGAS (Faithfulness, Relevance, Recall)"], milestone: "Build an enterprise-grade RAG pipeline with rerankers achieving 90%+ RAGAS score." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "Autonomous AI Agents (LangGraph)", topics: ["Stateful Agent Graphs with LangGraph", "Tool Integration: Web Search, Database queries, Calculator, API callers", "Human-in-the-Loop workflows and memory persistence", "Fine-tuning open source models with LoRA/QLoRA on custom datasets"], milestone: "Build a multi-agent autonomous research assistant that browses the web and drafts reports." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Production GenAI Systems", topics: ["Streaming SSE endpoints with FastAPI", "Enterprise Guardrails (Input validation, PII redaction)", "Cost and latency telemetry with LangSmith"], milestone: "Ship 3 comprehensive production-grade GenAI applications." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "AI Application Showcase", topics: ["GitHub repository with live demo video, architecture diagram, and RAG evaluation stats", "Interactive web frontends built with Next.js or Streamlit", "Writing technical deep-dive articles on RAG optimization"], milestone: "A published portfolio showcasing production GenAI applications." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "GenAI System Design & Architecture", topics: ["Explain the difference between Fine-Tuning and RAG and when to use each", "How to prevent LLM hallucinations in mission-critical applications", "Design an Enterprise Knowledge Copilot with RAG and Access Controls", "Vector DB indexing algorithms (HNSW vs IVF-Flat)"], milestone: "Ace technical GenAI system design and coding interviews." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "AI Industry Hiring", topics: ["Resume targeting Generative AI Engineer / LLM Application Developer roles", "Outreach to AI startups and enterprise innovation labs", "Mock technical interviews"], milestone: "Secure employment as a Generative AI / LLM Engineer." }
    ],
    projects: [
      { tier: "Beginner", title: "Smart PDF Document Q&A with Semantic Search", tech: ["Python", "OpenAI API", "ChromaDB", "Streamlit", "PyPDF"], description: "Upload PDF documents, generate vector embeddings, and chat with documents with source citations." },
      { tier: "Intermediate", title: "Enterprise RAG Pipeline with Reranking & Hybrid Search", tech: ["FastAPI", "LlamaIndex", "Qdrant / PGVector", "Cohere Reranker", "RAGAS"], description: "Advanced RAG system combining BM25 and vector search with cross-encoder reranking and automated evaluation." },
      { tier: "Production / Capstone", title: "Autonomous Multi-Agent Market Research Analyst", tech: ["LangGraph", "FastAPI", "Tavily Search API", "Next.js", "Server-Sent Events", "LangSmith"], description: "Multi-agent team: Planner, Web Researcher, Data Verifier, and Report Writer with live SSE token streaming." }
    ],
    certifications: [
      { name: "DeepLearning.AI Generative AI Specialization", issuer: "DeepLearning.AI" },
      { name: "AWS Certified AI Practitioner / Specialty", issuer: "Amazon Web Services" }
    ],
    interviewTopics: [
      { category: "RAG & Vector Search", topics: ["When should you use RAG vs Fine-Tuning vs Prompt Engineering?", "How does HNSW (Hierarchical Navigable Small World) indexing work in vector databases?", "What chunking strategies are best for tabular data vs unstructured prose?", "How do cross-encoder rerankers improve RAG retrieval precision?"] },
      { category: "Agents & LLM Systems", topics: ["How do autonomous agents prevent infinite loops and maintain state?", "Explain the ReAct (Reason + Act) prompting paradigm", "How to secure LLM applications against Prompt Injection attacks", "How do LoRA and QLoRA reduce VRAM requirements during model fine-tuning?"] }
    ],
    relatedRoles: ["AI Engineer", "Machine Learning Engineer", "Backend Developer", "Data Scientist"]
  },

  {
    id: "nlp-engineer",
    careerFamily: "DATA & AI",
    roleName: "NLP Engineer",
    slug: "nlp-engineer",
    badge: "Specialized",
    shortDescription: "Develops text processing pipelines, sentiment analyzers, language models, and translation engines.",
    description: "A Natural Language Processing (NLP) Engineer specializes in computational linguistics, text analytics, tokenization, language modeling, Named Entity Recognition (NER), text summarization, and Transformer-based language understanding.",
    targetAudience: ["B.Tech", "B.E.", "MCA", "M.Tech", "Computer Science"],
    salaryRange: { entry: "₹6.5 - ₹12.5 LPA", mid: "₹13 - ₹25 LPA", senior: "₹26 - ₹55+ LPA" },
    responsibilities: [
      "Build custom text classification, Named Entity Recognition (NER), and sentiment analysis models.",
      "Preprocess, clean, and tokenize multi-language text corpora at scale (SpaCy, NLTK, Hugging Face).",
      "Fine-tune Transformer architectures (BERT, RoBERTa, T5) on proprietary domain datasets.",
      "Develop conversational bots, machine translation, and semantic search systems.",
      "Optimize NLP inference latency for production deployment."
    ],
    prerequisites: [
      { name: "Python Programming", desc: "Object-oriented Python, regular expressions (Regex), text manipulation.", required: true },
      { name: "Deep Learning Foundations", desc: "Neural networks, PyTorch, backpropagation, embeddings.", required: true },
      { name: "Linguistics & Text Basics", desc: "Parts of speech, parsing, syntax trees, vocabulary tokenization.", required: true },
      { name: "Git Version Control", desc: "Version control and collaborative coding.", required: true }
    ],
    technologies: [
      { name: "Python & Regex", category: "Language", priority: "MUST LEARN", description: "Text normalization, regular expression pattern matching." },
      { name: "Hugging Face Transformers & Datasets", category: "NLP Core", priority: "MUST LEARN", description: "BERT, RoBERTa, GPT, T5, tokenizers, pipeline abstractions." },
      { name: "PyTorch", category: "Deep Learning", priority: "MUST LEARN", description: "Training custom neural networks and loss functions." },
      { name: "SpaCy & NLTK", category: "Classical NLP", priority: "MUST LEARN", description: "Lemmatization, POS tagging, dependency parsing, sentence boundary detection." },
      { name: "Named Entity Recognition (NER)", category: "Information Extraction", priority: "HIGH PRIORITY", description: "Custom entity extraction from medical, financial, and legal texts." },
      { name: "Vector Embeddings & Semantic Search", category: "Embeddings", priority: "HIGH PRIORITY", description: "Sentence-Transformers, dense retrieval, vector databases." },
      { name: "FastAPI Model Serving", category: "Deployment", priority: "HIGH PRIORITY", description: "Low-latency REST endpoints for real-time text analysis." },
      { name: "Topic Modeling & Clustering (BERTopic)", category: "Unsupervised NLP", priority: "GOOD TO KNOW", description: "Extracting latent topics and clusters from raw customer feedback." },
      { name: "Sequence-to-Sequence & Translation", category: "Seq2Seq", priority: "GOOD TO KNOW", description: "T5 and MarianMT for text summarization and translation." }
    ],
    tools: [
      { name: "Hugging Face Hub", priority: "MUST LEARN", purpose: "Finding pre-trained model checkpoints." },
      { name: "JupyterLab / VS Code", priority: "MUST LEARN", purpose: "Development environment." },
      { name: "Weights & Biases (W&B)", priority: "HIGH PRIORITY", purpose: "Tracking training loss and perplexity curves." },
      { name: "Docker", priority: "HIGH PRIORITY", purpose: "Containerization." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-3", focus: "Text Preprocessing & Classical NLP", topics: ["Regex for text cleaning, Tokenization, Stemming & Lemmatization", "TF-IDF (Term Frequency - Inverse Document Frequency) & Bag of Words", "Part of Speech (POS) Tagging and Dependency Parsing with SpaCy"], milestone: "Build a spam/ham text classifier using TF-IDF and Logistic Regression." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 4-8", focus: "Word Embeddings & RNNs", topics: ["Word2Vec, GloVe, and FastText static embeddings", "Recurrent Neural Networks (RNNs), LSTMs, and GRUs for text sequences", "Bidirectional LSTMs for sequence labeling (NER) in PyTorch"], milestone: "Train a custom PyTorch BiLSTM for sentiment analysis on IMDb reviews." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "Hugging Face Ecosystem", topics: ["Hugging Face Tokenizers (BPE, WordPiece)", "Loading models & datasets from Hugging Face Hub", "Trainer API and evaluation metrics (Perplexity, ROUGE, BLEU)"], milestone: "Fine-tune a DistilBERT model on a custom multi-class news classification dataset." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "Transformers & Attention Mechanism", topics: ["Transformer Architecture: Multi-Head Self-Attention, Positional Encodings", "Encoder-only (BERT) vs Decoder-only (GPT) vs Encoder-Decoder (T5)", "Custom Named Entity Recognition (NER) training with SpaCy and Transformers"], milestone: "Train a domain-specific Financial / Medical Named Entity Recognition model." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "Dense Retrieval & Model Compression", topics: ["Sentence-Transformers for Semantic Search and Question Answering", "BERTopic for automated unsupervised topic discovery", "Quantization & ONNX export for sub-20ms inference latency"], milestone: "Build a semantic legal contract search engine with Sentence-Transformers." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Production NLP Pipelines", topics: ["End-to-end NLP REST API with FastAPI and Docker", "Handling batch text inference efficiently", "Error analysis and confusion matrix debugging"], milestone: "Deploy 3 production-grade NLP applications with live demo endpoints." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "Hugging Face & GitHub Showcase", topics: ["Publishing model checkpoints and demo Spaces on Hugging Face", "GitHub repository with clean preprocessing and training code", "Technical case study write-ups"], milestone: "A published portfolio showcasing custom fine-tuned NLP models." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "NLP Theory & Math", topics: ["Explain the math behind Scaled Dot-Product Attention: Softmax(QK^T / sqrt(d_k))V", "BERT Masked Language Modeling (MLM) vs Next Sentence Prediction (NSP)", "BLEU vs ROUGE score metrics in text generation", "How BPE (Byte Pair Encoding) handles Out-Of-Vocabulary (OOV) words"], milestone: "Pass technical NLP interviews and theoretical derivations." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Career Launch", topics: ["NLP Engineer resume emphasizing model metrics (F1, ROUGE) and latency", "Applying to AI labs, search engines, and conversational AI startups", "Mock technical interviews"], milestone: "Secure employment as an Associate / Junior NLP Engineer." }
    ],
    projects: [
      { tier: "Beginner", title: "Financial News Sentiment & Entity Extractor", tech: ["Python", "SpaCy", "DistilBERT", "Streamlit"], description: "Extracts company names, ticker symbols, and classifies financial news sentiment into Positive/Neutral/Negative." },
      { tier: "Intermediate", title: "Automated Clinical / Legal Document Summarizer", tech: ["PyTorch", "Hugging Face (T5/BART)", "FastAPI", "ROUGE"], description: "Abstractive summarization of long multi-page documents with automated ROUGE evaluation." },
      { tier: "Production / Capstone", title: "Enterprise Customer Ticket Routing & Intent Classification Engine", tech: ["PyTorch", "RoBERTa", "FastAPI", "Docker", "ONNX Runtime", "PostgreSQL"], description: "Sub-25ms inference API routing customer support tickets to departments with confidence calibration and fallback rules." }
    ],
    certifications: [
      { name: "DeepLearning.AI Natural Language Processing Specialization", issuer: "DeepLearning.AI (Coursera)" },
      { name: "Hugging Face NLP Certification", issuer: "Hugging Face" }
    ],
    interviewTopics: [
      { category: "Transformer Architecture", topics: ["Derive the self-attention formula and explain why we divide by sqrt(d_k)", "Difference between Encoder-only (BERT), Decoder-only (GPT), and Encoder-Decoder (T5) architectures", "How Positional Encodings (Sinusoidal vs Rotary/RoPE) inject order information", "What is cross-attention and where is it used in Seq2Seq models?"] }
    ],
    relatedRoles: ["Generative AI Engineer", "Data Scientist", "Machine Learning Engineer", "AI Engineer"]
  },

  {
    id: "computer-vision-engineer",
    careerFamily: "DATA & AI",
    roleName: "Computer Vision Engineer",
    slug: "computer-vision-engineer",
    badge: "Specialized",
    shortDescription: "Develops image processing algorithms, object detectors, facial recognition, and autonomous vision systems.",
    description: "A Computer Vision (CV) Engineer builds algorithms and neural networks that enable computers to understand, process, and extract meaning from digital images and video streams. They work on object detection, segmentation, face recognition, autonomous driving, and medical image diagnostics.",
    targetAudience: ["B.Tech", "B.E.", "MCA", "M.Tech", "Computer Science", "ECE"],
    salaryRange: { entry: "₹6.5 - ₹13 LPA", mid: "₹14 - ₹26 LPA", senior: "₹28 - ₹58+ LPA" },
    responsibilities: [
      "Train and deploy real-time Object Detection and Segmentation models (YOLOv8/v10, Mask R-CNN, SAM).",
      "Process high-frame-rate live video streams using OpenCV, FFmpeg, and RTSP protocols.",
      "Perform image preprocessing, augmentation, color space conversions, and geometric transformations.",
      "Optimize neural networks for embedded edge devices (NVIDIA Jetson, Raspberry Pi, ONNX, TensorRT).",
      "Develop visual tracking, facial recognition, and OCR systems."
    ],
    prerequisites: [
      { name: "Python & C++ Basics", desc: "Proficiency in Python and basic understanding of C++ for real-time speed.", required: true },
      { name: "Matrix Math & Linear Algebra", desc: "Matrices, convolutions, 2D/3D coordinate transformations.", required: true },
      { name: "Deep Learning Foundations", desc: "Convolutional Neural Networks (CNNs), PyTorch, loss functions.", required: true },
      { name: "Git Version Control", desc: "Source control and collaborative workflows.", required: true }
    ],
    technologies: [
      { name: "OpenCV", category: "CV Core", priority: "MUST LEARN", description: "Image filtering, morphological ops, edge detection (Canny), contours, color spaces." },
      { name: "PyTorch & Torchvision", category: "Deep Learning", priority: "MUST LEARN", description: "CNN architectures (ResNet, EfficientNet), custom dataset loaders, transfer learning." },
      { name: "Object Detection (YOLOv8 / YOLOv10)", category: "Detection", priority: "MUST LEARN", description: "Real-time bounding box prediction, mAP metrics, NMS (Non-Maximum Suppression)." },
      { name: "Image Segmentation (SAM / Mask R-CNN / UNet)", category: "Segmentation", priority: "HIGH PRIORITY", description: "Semantic and instance segmentation at pixel-level." },
      { name: "Video Streaming & Tracking (DeepSORT / ByteTrack)", category: "Tracking", priority: "HIGH PRIORITY", description: "Multi-object tracking across video frames with Kalman filtering." },
      { name: "OCR & Text Extraction (EasyOCR / Tesseract)", category: "OCR", priority: "HIGH PRIORITY", description: "Extracting text from scanned receipts, license plates, and documents." },
      { name: "Model Optimization (TensorRT / ONNX)", category: "Inference Acceleration", priority: "HIGH PRIORITY", description: "NVIDIA TensorRT acceleration for 60+ FPS edge inference." },
      { name: "Edge AI (NVIDIA Jetson / Coral)", category: "Hardware", priority: "GOOD TO KNOW", description: "Deploying lightweight vision models to edge compute modules." },
      { name: "3D Vision & Point Clouds", category: "Advanced Vision", priority: "OPTIONAL / LATER", description: "Stereo vision, depth estimation, and LiDAR point clouds." }
    ],
    tools: [
      { name: "Roboflow / Label Studio", priority: "MUST LEARN", purpose: "Image labeling, bounding box annotation, and dataset augmentation." },
      { name: "VS Code & JupyterLab", priority: "MUST LEARN", purpose: "Development environment." },
      { name: "Docker", priority: "HIGH PRIORITY", purpose: "Containerizing CUDA-enabled vision applications." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-3", focus: "Image Processing with OpenCV", topics: ["Image representation (Pixels, BGR vs RGB vs HSV)", "Kernel Convolutions, Gaussian Blur, Sobel & Canny Edge Detection", "Contours, Thresholding, and Geometric Transformations (Affine/Perspective)"], milestone: "Build a document scanner that detects paper edges and perspective-warps the image." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 4-8", focus: "CNNs & Image Classification in PyTorch", topics: ["Convolutional Layers, Pooling, Stride, Padding", "Transfer Learning with ResNet-50 and EfficientNet", "Data Augmentation (Albumentations library: Flips, Rotations, ColorJitter)", "Evaluating Confusion Matrix, Precision, Recall, and F1"], milestone: "Train a custom transfer learning model classifying 10 categories of skin lesions with 92%+ accuracy." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "Dataset Annotation & Roboflow", topics: ["Bounding box and polygon annotation best practices", "Exporting YOLO format datasets and dataset versioning in Roboflow"], milestone: "Annotate and export a custom 500-image object detection dataset." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "Real-Time Object Detection (YOLO)", topics: ["YOLO Architecture: Backbone, Neck (FPN/PAN), Head", "Intersection over Union (IoU), Non-Maximum Suppression (NMS), mAP@50-95", "Training custom YOLOv8 models on proprietary datasets", "Multi-Object Tracking using ByteTrack / DeepSORT"], milestone: "Build a real-time vehicle traffic counter and speed estimator from video feeds." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "Segmentation & Edge Optimization", topics: ["Semantic vs Instance Segmentation with UNet and Mask R-CNN", "Segment Anything Model (SAM) integration", "Exporting models to ONNX and NVIDIA TensorRT for 60+ FPS inference", "FastAPI streaming video endpoints"], milestone: "Deploy a 60 FPS safety helmet compliance detection system with TensorRT." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Production Computer Vision Systems", topics: ["Automated License Plate Recognition (ALPR)", "Facial Recognition with FaceNet and Cosine distance", "Packaging vision pipelines into Docker containers"], milestone: "Ship 3 comprehensive production-grade Computer Vision applications." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "Visual Showcase", topics: ["GitHub repositories with annotated GIF/video demonstrations", "Detailed documentation on FPS benchmarks and mAP accuracy", "Publishing interactive demo apps"], milestone: "A published portfolio showcasing real-time Computer Vision demos." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "CV Theory & Architecture", topics: ["Math behind 2D Convolution and output size calculation: (W - F + 2P)/S + 1", "How Non-Maximum Suppression (NMS) works step-by-step", "mAP (Mean Average Precision) calculation and Precision-Recall curves", "Trade-offs between 1-stage detectors (YOLO) and 2-stage detectors (Faster R-CNN)"], milestone: "Ace technical Computer Vision engineering interviews." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Career Placement", topics: ["CV Engineer resume highlighting FPS benchmarks and edge deployments", "Targeting Autonomous Driving, Robotics, and Surveillance firms", "Mock technical interviews"], milestone: "Secure employment as an Associate / Junior Computer Vision Engineer." }
    ],
    projects: [
      { tier: "Beginner", title: "Automatic License Plate Recognition (ALPR) System", tech: ["OpenCV", "Python", "YOLOv8", "EasyOCR"], description: "Detects vehicle license plates in real-time video frames and extracts alphanumeric characters via OCR." },
      { tier: "Intermediate", title: "Smart Retail Foot-Traffic & Heatmap Analyzer", tech: ["Python", "YOLOv8", "ByteTrack", "OpenCV", "Streamlit"], description: "Tracks customer paths in retail store surveillance feeds, generating visual foot-traffic heatmaps." },
      { tier: "Production / Capstone", title: "Industrial Safety PPE Compliance & Danger Zone Monitor", tech: ["PyTorch", "YOLOv8", "TensorRT", "FastAPI", "Docker", "RTSP Stream"], description: "Real-time RTSP stream processing checking helmets/vests with automated alert snapshots and sub-20ms latency." }
    ],
    certifications: [
      { name: "DeepLearning.AI Deep Learning Specialization", issuer: "DeepLearning.AI (Coursera)" },
      { name: "OpenCV Certified Computer Vision Specialist", issuer: "OpenCV.org" }
    ],
    interviewTopics: [
      { category: "Computer Vision Theory", topics: ["Calculate the output dimensions of a 224x224 image after a 3x3 convolution with stride 2 and padding 1", "How does Non-Maximum Suppression (NMS) eliminate redundant bounding boxes?", "Difference between Semantic Segmentation (UNet) and Instance Segmentation (Mask R-CNN)", "Why is 1x1 Convolution used in ResNet and Inception architectures?"] }
    ],
    relatedRoles: ["Machine Learning Engineer", "Robotics Software Engineer", "AI Engineer", "Data Scientist"]
  }
];

module.exports = dataAndAIRoles;
