export type Question = {
  id: number;
  question: string;
  options: string[];
  correct: number | number[];
  multiCorrect?: boolean;
};

export const sapC02Questions: Question[] = [
  {
    id: 1,
    question:
      "An events company runs a ticketing platform on AWS. The company's customers configure and schedule their events on the platform. The events result in large increases of traffic to the platform. The company knows the date and time of each customer's events. The company runs the platform on an Amazon Elastic Container Service (Amazon ECS) cluster. The ECS cluster consists of Amazon EC2 On-Demand Instances that are in an Auto Scaling group. The Auto Scaling group uses a predictive scaling policy. The ECS cluster makes frequent requests to an Amazon S3 bucket to download ticket assets. The ECS cluster and the S3 bucket are in the same AWS Region and the same AWS account. Traffic between the ECS cluster and the S3 bucket flows across a NAT gateway. The company needs to optimize the cost of the platform without decreasing the platform's availability. Which combination of steps will meet these requirements? (Choose two.)",
    options: [
      "A. Create a gateway VPC endpoint for the S3 bucket.",
      "B. Add another ECS capacity provider that uses an Auto Scaling group of Spot Instances. Configure the new capacity provider strategy to have the same weight as the existing capacity provider strategy.",
      "C. Create On-Demand Capacity Reservations for the applicable instance type for the time period of the scheduled scaling policies.",
      "D. Enable S3 Transfer Acceleration on the S3 bucket.",
      "E. Replace the predictive scaling policy with scheduled scaling policies for the scheduled events.",
    ],
    correct: [0, 4],
    multiCorrect: true,
  },
  {
    id: 2,
    question:
      "A company wants to migrate its website to AWS. The website uses containers that are deployed in an on-premises, self-managed Kubernetes cluster. All data for the website is stored in an on-premises PostgreSQL database. The company has decided to migrate the on-premises Kubernetes cluster to an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. The EKS cluster will use EKS managed node groups with a static number of nodes. The company will also migrate the on-premises database to an Amazon RDS for PostgreSQL database. A solutions architect needs to estimate the total cost of ownership (TCO) for this workload before the migration. Which solution will provide the required TCO information?",
    options: [
      "A. Request access to Migration Evaluator. Run the Migration Evaluator Collector and import the data. Configure a scenario. Export a Quick Insights report from Migration Evaluator.",
      "B. Launch AWS Database Migration Service (AWS DMS) for the on-premises database. Generate an assessment report. Create an estimate in AWS Pricing Calculator for the costs of the EKS migration.",
      "C. Initialize AWS Application Migration Service. Add the on-premises servers as source servers. Launch a test instance. Output a TCO report from Application Migration Service.",
      "D. Access the AWS Cloud Economics Center webpage to assess the AWS Cloud Value Framework. Create an AWS Cost and Usage report from the Cloud Value Framework.",
    ],
    correct: 0,
  },
  {
    id: 3,
    question:
      "A company is collecting data from a large set of IoT devices. The data is stored in an Amazon S3 data lake. Data scientists perform analytics on Amazon EC2 instances that run in two public subnets in a VPC in a separate AWS account. The data scientists need access to the data lake from the EC2 instances. The EC2 instances already have an assigned role with permissions to access Amazon S3. According to company policies, only authorized networks are allowed to have access to the IoT data. Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)",
    options: [
      "A. Create a gateway VPC endpoint for Amazon S3 in the data scientists' VPC.",
      "B. Create an S3 access point in the data scientists' AWS account for the data lake.",
      "C. Update the EC2 instance role. Add a policy with a condition that allows the s3:GetObject action when the value for the s3:DataAccessPointArn condition key is a valid access point ARN.",
      "D. Update the VPC route table to route S3 traffic to an S3 access point.",
      "E. Add an S3 bucket policy with a condition that allows the s3:GetObject action when the value for the s3:DataAccessPointArn condition key is a valid access point ARN.",
    ],
    correct: [0, 4],
    multiCorrect: true,
  },
  {
    id: 4,
    question:
      "Accompany is building an application to collect and transmit sensor data from a factory. The application will use AWS IoT Core to send data from hundreds of devices to an Amazon S3 data lake. The company must enrich the data before loading the data into Amazon S3. The application will transmit the sensor data every 5 seconds. New sensor data must be available in Amazon S3 less than 30 minutes after the application collects the data. No other applications are processing the sensor data from AWS IoT Core. Which solution will meet these requirements MOST cost-effectively?",
    options: [
      "A. Create a topic in AWS IoT Core to ingest the sensor data. Create an AWS Lambda function to enrich the data and to write the data to Amazon S3. Configure an AWS IoT rule action to invoke the Lambda function.",
      "B. Use AWS IoT Core Basic Ingest to ingest the sensor data. Configure an AWS IoT rule action to write the data to Amazon Kinesis Data Firehose. Set the Kinesis Data Firehose buffering interval to 900 seconds. Use Kinesis Data Firehose to invoke an AWS Lambda function to enrich the data. Configure Kinesis Data Firehose to deliver the data to Amazon S3.",
      "C. Create a topic in AWS IoT Core to ingest the sensor data. Configure an AWS IoT rule action to send the data to an Amazon Timestream table. Create an AWS Lambda function to read the data from Timestream. Configure the Lambda function to enrich the data and to write the data to Amazon S3.",
      "D. Use AWS IoT Core Basic Ingest to ingest the sensor data. Configure an AWS IoT rule action to write the data to Amazon Kinesis Data Streams. Create a consumer AWS Lambda function to process the data from Kinesis Data Streams and to enrich the data. Call the S3 PutObject API operation from the Lambda function to write the data to Amazon S3.",
    ],
    correct: 1,
  },
  {
    id: 5,
    question:
      "A company is hosting an application on AWS for a project that will run for the next 3 years. The application consists of 20 Amazon EC2 On-Demand Instances that are registered in a target group for a Network Load Balancer (NLB). The instances are spread across two Availability Zones. The application is stateless and runs 24 hours a day, 7 days a week. The company receives reports from users who are experiencing slow responses from the application. Performance metrics show that the instances are at 10% CPU utilization during normal application use. However, the CPU utilization increases to 100% at busy times, which typically last for a few hours. The company needs a new architecture to resolve the problem of slow responses from the application. Which solution will meet these requirements MOST cost-effectively?",
    options: [
      "A. Create an Auto Scaling group. Attach the Auto Scaling group to the target group of the NLB. Set the minimum capacity to 20 and the desired capacity to 28. Purchase Reserved Instances for 20 instances.",
      "B. Create a Spot Fleet that has a request type of request. Set the TotalTargetCapacity parameter to 20. Set the DefaultTargetCapacityType parameter to On-Demand. Specify the NLB when creating the Spot Fleet.",
      "C. Create a Spot Fleet that has a request type of maintain. Set the TotalTargetCapacity parameter to 20. Set the DefaultTargetCapacityType parameter to Spot. Replace the NLB with an Application Load Balancer.",
      "D. Create an Auto Scaling group. Attach the Auto Scaling group to the target group of the NLB. Set the minimum capacity to 4 and the maximum capacity to 28. Purchase Reserved Instances for four instances.",
    ],
    correct: 3,
  },
  {
    id: 6,
    question:
      "A company migrated to AWS and uses AWS Business Support. The company wants to monitor the cost-effectiveness of Amazon EC2 instances across AWS accounts. The EC2 instances have tags for department, business unit, and environment. Development EC2 instances have high cost but low utilization. The company needs to detect and stop any underutilized development EC2 instances. Instances are underutilized if they had 10% or less average daily CPU utilization and 5 MB or less network I/O for at least 4 of the past 14 days. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "A. Configure Amazon CloudWatch dashboards to monitor EC2 instance utilization based on tags for department, business unit, and environment. Create an Amazon EventBridge rule that invokes an AWS Lambda function to stop underutilized development EC2 instances.",
      "B. Configure AWS Systems Manager to track EC2 instance utilization and report underutilized instances to Amazon CloudWatch. Filter the CloudWatch data by tags for department, business unit, and environment. Create an Amazon EventBridge rule that invokes an AWS Lambda function to stop underutilized development EC2 instances.",
      "C. Create an Amazon EventBridge rule to detect low utilization of EC2 instances reported by AWS Trusted Advisor. Configure the rule to invoke an AWS Lambda function that filters the data by tags for department, business unit, and environment and stops underutilized development EC2 instances.",
      "D. Create an AWS Lambda function to run daily to retrieve utilization data for all EC2 instances. Save the data to an Amazon DynamoDB table. Create an Amazon QuickSight dashboard that uses the DynamoDB table as a data source to identify and stop underutilized development EC2 instances.",
    ],
    correct: 2,
  },
  {
    id: 7,
    question:
      "A travel company built a web application that uses Amazon Simple Email Service (Amazon SES) to send email notifications to users. The company needs to enable logging to help troubleshoot email delivery issues. The company also needs the ability to do searches that are based on recipient, subject, and time sent. Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)",
    options: [
      "A. Create an Amazon SES configuration set with Amazon Data Firehose as the destination. Choose to send logs to an Amazon S3 bucket.",
      "B. Enable AWS CloudTrail logging. Specify an Amazon S3 bucket as the destination for the logs.",
      "C. Use Amazon Athena to query the logs in the Amazon S3 bucket for recipient, subject, and time sent.",
      "D. Create an Amazon CloudWatch log group. Configure Amazon SES to send logs to the log group.",
      "E. Use Amazon Athena to query the logs in Amazon CloudWatch for recipient, subject, and time sent.",
    ],
    correct: [0, 2],
    multiCorrect: true,
  },
  {
    id: 8,
    question:
      "A company in the United States (US) has acquired a company in Europe. Both companies use the AWS Cloud. The US company has built a new application with a microservices architecture. The US company is hosting the application across five VPCs in the us-east-2 Region. The application must be able to access resources in one VPC in the eu-west-1 Region. However, the application must not be able to access any other VPCs. The VPCs in both Regions have no overlapping CIDR ranges. All accounts are already consolidated in one organization in AWS Organizations. Which solution will meet these requirements MOST cost-effectively?",
    options: [
      "A. Create one transit gateway in eu-west-1. Attach the VPCs in us-east-2 and the VPC in eu-west-1 to the transit gateway. Create the necessary route entries in each VPC so that the traffic is routed through the transit gateway.",
      "B. Create one transit gateway in each Region. Attach the involved subnets to the regional transit gateway. Create the necessary route entries in the associated route tables for each subnet so that the traffic is routed through the regional transit gateway. Peer the two transit gateways.",
      "C. Create a full mesh VPC peering connection configuration between all the VPCs. Create the necessary route entries in each VPC so that the traffic is routed through the VPC peering connection.",
      "D. Create one VPC peering connection for each VPC in us-east-2 to the VPC in eu-west-1. Create the necessary route entries in each VPC so that the traffic is routed through the VPC peering connection.",
    ],
    correct: 3,
  },
  {
    id: 9,
    question:
      "A company is changing the way that it handles patching of Amazon EC2 instances in its application account. The company currently patches instances over the internet by using a NAT gateway in a VPC in the application account. The company has EC2 instances set up as a patch source repository in a dedicated private VPC in a core account. The company wants to use AWS Systems Manager Patch Manager and the patch source repository in the core account to patch the EC2 instances in the application account. The company must prevent all EC2 instances in the application account from accessing the internet. The EC2 instances in the application account need to access Amazon S3, where the application data is stored. These EC2 instances need connectivity to Systems Manager and to the patch source repository in the private VPC in the core account. Which solution will meet these requirements?",
    options: [
      "A. Create a network ACL that blocks outbound traffic on port 80. Associate the network ACL with all subnets in the application account. In the application account and the core account, deploy one EC2 instance that runs a custom VPN server. Create a VPN tunnel to access the private VPC. Update the route table in the application account.",
      "B. Create private VIFs for Systems Manager and Amazon S3. Delete the NAT gateway from the VPC in the application account. Create a transit gateway to access the patch source repository EC2 instances in the core account. Update the route table in the core account.",
      "C. Create VPC endpoints for Systems Manager and Amazon S3. Delete the NAT gateway from the VPC in the application account. Create a VPC peering connection to access the patch source repository EC2 instances in the core account. Update the route tables in both accounts.",
      "D. Create a network ACL that blocks inbound traffic on port 80. Associate the network ACL with all subnets in the application account. Create a transit gateway to access the patch source repository EC2 instances in the core account. Update the route tables in both accounts.",
    ],
    correct: 2,
  },
  {
    id: 10,
    question:
      "A company has several AWS Lambda functions written in Python. The functions are deployed with the .zip package deployment type. The functions use a Lambda layer that contains common libraries and packages in a .zip file. The Lambda .zip packages and Lambda layer .zip file are stored in an Amazon S3 bucket. The company must implement automatic scanning of the Lambda functions and the Lambda layer to identify CVEs. A subset of the Lambda functions must receive automated code scans to detect potential data leaks and other vulnerabilities. The code scans must occur only for selected Lambda functions, not all the Lambda functions. Which combination of actions will meet these requirements? (Choose three.)",
    options: [
      "A. Activate Amazon Inspector. Start automated CVE scans.",
      "B. Activate Lambda standard scanning and Lambda code scanning in Amazon Inspector.",
      "C. Enable Amazon GuardDuty. Enable the Lambda Protection feature in GuardDuty.",
      "D. Enable scanning in the Monitor settings of the Lambda functions that need code scans.",
      "E. Tag Lambda functions that do not need code scans. In the tag, include a key of InspectorCodeExclusion and a value of LambdaCodeScanning.",
      "F. Use Amazon Inspector to scan the bucket that contains the Lambda .zip packages and the Lambda layer .zip file for code scans.",
    ],
    correct: [1, 4, 0],
    multiCorrect: true,
  },
  {
    id: 11,
    question:
      "A company is running a large containerized workload in the AWS Cloud. The workload consists of approximately 100 different services. The company uses Amazon Elastic Container Service (Amazon ECS) to orchestrate the workload. Recently the company's development team started using AWS Fargate instead of Amazon EC2 instances in the ECS cluster. In the past, the workload has come close to running the maximum number of EC2 instances that are available in the account. The company is worried that the workload could reach the maximum number of ECS tasks that are allowed. A solutions architect must implement a solution that will notify the development team when Fargate reaches 80% of the maximum number of tasks. What should the solutions architect do to meet this requirement?",
    options: [
      "A. Use Amazon CloudWatch to monitor the Sample Count statistic for each service in the ECS cluster. Set an alarm for when the math expression sample count/SERVICE_QUOTA(service)*100 is greater than 80. Notify the development team by using Amazon Simple Notification Service (Amazon SNS).",
      "B. Use Amazon CloudWatch to monitor service quotas that are published under the AWS/Usage metric namespace. Set an alarm for when the math expression metric/SERVICE_QUOTA(metric)*100 is greater than 80. Notify the development team by using Amazon Simple Notification Service (Amazon SNS).",
      "C. Create an AWS Lambda function to poll detailed metrics from the ECS cluster. When the number of running Fargate tasks is greater than 80, invoke Amazon Simple Email Service (Amazon SES) to notify the development team.",
      "D. Create an AWS Config rule to evaluate whether the Fargate SERVICE_QUOTA is greater than 80. Use Amazon Simple Email Service (Amazon SES) to notify the development team when the AWS Config rule is not compliant.",
    ],
    correct: 1,
  },
  {
    id: 12,
    question:
      "A company has deployed applications to thousands of Amazon EC2 instances in an AWS account. A security audit discovers that several unencrypted Amazon Elastic Block Store (Amazon EBS) volumes are attached to the EC2 instances. The company's security policy requires the EBS volumes to be encrypted. The company needs to implement an automated solution to encrypt the EBS volumes. The solution also must prevent development teams from creating unencrypted EBS volumes. Which solution will meet these requirements?",
    options: [
      "A. Configure the AWS Config managed rule that identifies unencrypted EBS volumes. Configure an automatic remediation action. Associate an AWS Systems Manager Automation runbook that includes the steps to create a new encrypted EBS volume. Create an AWS Key Management Service (AWS KMS) customer managed key. In the key policy, include a statement to deny the creation of unencrypted EBS volumes.",
      "B. Use AWS Systems Manager Fleet Manager to create a list of unencrypted EBS volumes. Create a Systems Manager Automation runbook that includes the steps to create a new encrypted EBS volume. Create an SCP to deny the creation of unencrypted EBS volumes.",
      "C. Use AWS Systems Manager Fleet Manager to create a list of unencrypted EBS volumes. Create a Systems Manager Automation runbook that includes the steps to create a new encrypted EBS volume. Modify the AWS account setting for EBS encryption to always encrypt new EBS volumes.",
      "D. Configure the AWS Config managed rule that identifies unencrypted EBS volumes. Configure an automatic remediation action. Associate an AWS Systems Manager Automation runbook that includes the steps to create a new encrypted EBS volume. Modify the AWS account setting for EBS encryption to always encrypt new EBS volumes.",
    ],
    correct: 3,
  },
  {
    id: 13,
    question:
      "A company is using AWS to develop and manage its production web application. The application includes an Amazon API Gateway HTTP API that invokes an AWS Lambda function. The Lambda function processes and then stores data in a database. The company wants to implement user authorization for the web application in an integrated way. The company already uses a third-party identity provider that issues OAuth tokens for the company's other applications. Which solution will meet these requirements?",
    options: [
      "A. Integrate the company's third-party identity provider with API Gateway. Configure an API Gateway Lambda authorizer to validate tokens from the identity provider. Require the Lambda authorizer on all API routes. Update the web application to get tokens from the identity provider and include the tokens in the Authorization header when calling the API Gateway HTTP API.",
      "B. Integrate the company's third-party identity provider with AWS Directory Service. Configure Directory Service as an API Gateway authorizer to validate tokens from the identity provider. Require the Directory Service authorizer on all API routes. Configure AWS IAM Identity Center as a SAML 2.0 identity Provider. Configure the web application as a custom SAML 2.0 application.",
      "C. Integrate the company's third-party identity provider with AWS IAM Identity Center. Configure API Gateway to use IAM Identity Center for zero-configuration authentication and authorization. Update the web application to retrieve AWS Security Token Service (AWS STS) tokens from IAM Identity Center and include the tokens in the Authorization header when calling the API Gateway HTTP API.",
      "D. Integrate the company's third-party identity provider with AWS IAM Identity Center. Configure IAM users with permissions to call the API Gateway HTTP API. Update the web application to extract request parameters from the IAM users and include the parameters in the Authorization header when calling the API Gateway HTTP API.",
    ],
    correct: 0,
  },
  {
    id: 14,
    question:
      "A company has multiple AWS accounts that are in an organization in AWS Organizations. The company needs to store AWS account activity and query the data from a central location by using SQL. Which solution will meet these requirements?",
    options: [
      "A. Create an AWS CloudTrail trail in each account. Specify CloudTrail management events for the trail. Configure CloudTrail to send the events to Amazon CloudWatch Logs. Configure CloudWatch cross-account observability. Query the data in CloudWatch Logs Insights.",
      "B. Use a delegated administrator account to create an AWS CloudTrail Lake data store. Specify CloudTrail management events for the data store. Enable the data store for all accounts in the organization. Query the data in CloudTrail Lake.",
      "C. Use a delegated administrator account to create an AWS CloudTrail trail. Specify CloudTrail management events for the trail. Enable the trail for all accounts in the organization. Keep all other settings as default. Query the CloudTrail data from the CloudTrail event history page.",
      "D. Use AWS CloudFormation StackSets to deploy AWS CloudTrail Lake data stores in each account. Specify CloudTrail management events for the data stores. Keep all other settings as default. Query the data in CloudTrail Lake.",
    ],
    correct: 1,
  },
  {
    id: 15,
    question:
      "A company is migrating its data center to the AWS Cloud and needs to complete the migration as quickly as possible. The company has many applications that are running on hundreds of VMware VMs in the data center. Each VM is configured with a shared Windows folder that contains common shared files. The file share is larger than 100 GB in size. The company's compliance team requires a change request to be filed and approved for every software installation and modification to each VM. The company has an AWS Direct Connect connection with 10 GB of bandwidth between AWS and the data center. Which set of steps should the company take to complete the migration in the LEAST amount of time?",
    options: [
      "A. Use VM Import/Export to create images of each VM. Use AWS Application Migration Service to manage and view the images. Copy the Windows file share data to an Amazon Elastic File System (Amazon EFS) file system. After migration, remap the file share to the EFS file system.",
      "B. Deploy the AWS Application Discovery Service agentless appliance to VMware vCenter. Review the portfolio of discovered VMs in AWS Migration Hub.",
      "C. Deploy the AWS Application Migration Service agentless appliance to VMware vCenter. Copy the Windows file share data to a new Amazon FSx for Windows File Server file system. After migration, remap the file share on each VM to the FSx for Windows File Server file system.",
      "D. Deploy the AWS Application Discovery Service Agent and the AWS Application Migration Service Agent onto each VMware hypervisor directly. Review the portfolio in AWS Migration Hub. Copy each VM's file share data to a new Amazon FSx for Windows File Server file system. After migration, remap the file share on each VM to the FSx for Windows File Server file system.",
    ],
    correct: 2,
  },
  {
    id: 16,
    question:
      "A company operates a static content distribution platform that serves customers globally. The customers consume content from their own AWS accounts. The company serves its content from an Amazon S3 bucket. The company uploads the content from its on-premises environment to the S3 bucket by using an S3 File Gateway. The company wants to improve the platform's performance and reliability by serving content from the AWS Region that is geographically closest to customers. The company must route the on-premises data to Amazon S3 with minimal latency and without public internet exposure. Which combination of steps will meet these requirements with the LEAST operational overhead? (Choose two.)",
    options: [
      "A. Implement S3 Multi-Region Access Points",
      "B. Use S3 Cross-Region Replication (CRR) to copy content to different Regions",
      "C. Create an AWS Lambda function that tracks the routing of clients to Regions",
      "D. Use an AWS Site-to-Site VPN connection to connect to a Multi-Region Access Point.",
      "E. Use AWS PrivateLink and AWS Direct Connect to connect to a Multi-Region Access Point.",
    ],
    correct: [0, 4],
    multiCorrect: true,
  },
  {
    id: 17,
    question:
      "A company needs to optimize the cost of an AWS environment that contains multiple accounts in an organization in AWS Organizations. The company conducted cost optimization activities 3 years ago and purchased Amazon EC2 Standard Reserved Instances that recently expired. The company needs EC2 instances for 3 more years. Additionally, the company has deployed a new serverless workload. Which strategy will provide the company with the MOST cost savings?",
    options: [
      "A. Purchase the same Reserved Instances for an additional 3-year term with All Upfront payment. Purchase a 3-year Compute Savings Plan with All Upfront payment in the management account to cover any additional compute costs.",
      "B. Purchase a 1-year Compute Savings Plan with No Upfront payment in each member account. Use the Savings Plans recommendations in the AWS Cost Management console to choose the Compute Savings Plan.",
      "C. Purchase a 3-year EC2 Instance Savings Plan with No Upfront payment in the management account to cover EC2 costs in each AWS Region. Purchase a 3-year Compute Savings Plan with No Upfront payment in the management account to cover any additional compute costs.",
      "D. Purchase a 3-year EC2 Instance Savings Plan with All Upfront payment in each member account. Use the Savings Plans recommendations in the AWS Cost Management console to choose the EC2 Instance Savings Plan.",
    ],
    correct: 0,
  },
  {
    id: 18,
    question:
      "A media company has a 30-TB repository of digital news videos. These videos are stored on tape in an on-premises tape library and referenced by a Media Asset Management (MAM) system. The company wants to enrich the metadata for these videos in an automated fashion and put them into a searchable catalog by using a MAM feature. The company must be able to search based on information in the video, such as objects, scenery items, or people's faces. A catalog is available that contains faces of people who have appeared in the videos that include an image of each person. The company would like to migrate these videos to AWS. The company has a high-speed AWS Direct Connect connection with AWS and would like to move the MAM solution video content directly from its current file system. How can these requirements be met by using the LEAST amount of ongoing management overhead and causing MINIMAL disruption to the existing system?",
    options: [
      "A. Set up an AWS Storage Gateway, file gateway appliance on-premises. Use the MAM solution to extract the videos from the current archive and push them into the file gateway. Use the catalog of faces to build a collection in Amazon Rekognition. Build an AWS Lambda function that invokes the Rekognition Javascript SDK to have Rekognition pull the video from the Amazon S3 files backing the file gateway, retrieve the required metadata, and push the metadata into the MAM solution.",
      "B. Set up an AWS Storage Gateway, tape gateway appliance on-premises. Use the MAM solution to extract the videos from the current archive and push them into the tape gateway. Use the catalog of faces to build a collection in Amazon Rekognition. Build an AWS Lambda function that invokes the Rekognition Javascript SDK to have Amazon Rekognition process the video in the tape gateway, retrieve the required metadata, and push the metadata into the MAM solution.",
      "C. Configure a video ingestion stream by using Amazon Kinesis Video Streams. Use the catalog of faces to build a collection in Amazon Rekognition. Stream the videos from the MAM solution into Kinesis Video Streams. Configure Amazon Rekognition to process the streamed videos. Then, use a stream consumer to retrieve the required metadata, and push the metadata into the MAM solution. Configure the stream to store the videos in Amazon S3.",
      "D. Set up an Amazon EC2 instance that runs the OpenCV libraries. Copy the videos, images, and face catalog from the on-premises library into an Amazon EBS volume mounted on this EC2 instance. Process the videos to retrieve the required metadata, and push the metadata into the MAM solution, while also copying the video files to an Amazon S3 bucket.",
    ],
    correct: 0,
  },
  {
    id: 19,
    question:
      "A company hosts a data-processing application on Amazon EC2 instances. The application polls an Amazon Elastic File System (Amazon EFS) file system for newly uploaded files. When a new file is detected, the application extracts data from the file and runs logic to select a Docker container image to process the file. The application starts the appropriate container image and passes the file location as a parameter. The data processing that the container performs can take up to 2 hours. When the processing is complete, the code that runs inside the container writes the file back to Amazon EFS and exits. The company needs to refactor the application to eliminate the EC2 instances that are running the containers. Which solution will meet these requirements?",
    options: [
      "A. Create an Amazon Elastic Container Service (Amazon ECS) cluster. Configure the processing to run as AWS Fargate tasks. Extract the container selection logic to run as an Amazon EventBridge rule that starts the appropriate Fargate task. Configure the EventBridge rule to run when files are added to the EFS file system.",
      "B. Create an Amazon Elastic Container Service (Amazon ECS) cluster. Configure the processing to run as AWS Fargate tasks. Update and containerize the container selection logic to run as a Fargate service that starts the appropriate Fargate task. Configure an EFS event notification to invoke the Fargate service when files are added to the EFS file system.",
      "C. Create an Amazon Elastic Container Service (Amazon ECS) cluster. Configure the processing to run as AWS Fargate tasks. Extract the container selection logic to run as an AWS Lambda function that starts the appropriate Fargate task. Migrate the storage of file uploads to an Amazon S3 bucket. Update the processing code to use Amazon S3. Configure an S3 event notification to invoke the Lambda function when objects are created.",
      "D. Create AWS Lambda container images for the processing. Configure Lambda functions to use the container images. Extract the container selection logic to run as a decision Lambda function that invokes the appropriate Lambda processing function. Migrate the storage of file uploads to an Amazon S3 bucket. Update the processing code to use Amazon S3. Configure an S3 event notification to invoke the decision Lambda function when objects are created.",
    ],
    correct: 2,
  },
  {
    id: 20,
    question:
      "A company wants to create a single Amazon S3 bucket for its data scientists to store work-related documents. The company uses AWS IAM Identity Center to authenticate all users. A group for the data scientists was created. The company wants to give the data scientists access to only their own work. The company also wants to create monthly reports that show which documents each user accessed. Which combination of steps will meet these requirements? (Choose two.)",
    options: [
      "A. Create a custom IAM Identity Center permission set to grant the data scientists access to an S3 bucket prefix that matches their username tag. Use a policy to limit access to paths with the ${aws:PrincipalTag/userName}/* condition.",
      "B. Create an IAM Identity Center role for the data scientists group that has Amazon S3 read access and write access. Add an S3 bucket policy that allows access to the IAM Identity Center role.",
      "C. Configure AWS CloudTrail to log S3 data events and deliver the logs to an S3 bucket. Use Amazon Athena to run queries on the CloudTrail logs in Amazon S3 and generate reports.",
      "D. Configure AWS CloudTrail to log S3 management events to CloudWatch. Use Amazon Athena's CloudWatch connector to query the logs and generate reports.",
      "E. Enable S3 access logging to EMR File System (EMRFS). Use Amazon S3 Select to query logs and generate reports.",
    ],
    correct: [0, 2],
    multiCorrect: true,
  },
  {
    id: 21,
    question:
      "A company is planning to migrate an Aurora MySQL database to AWS. The company wants to minimize downtime during the migration. The database is approximately 10 TB in size. Which approach will meet these requirements?",
    options: [
      "A. Use AWS DMS (Database Migration Service) with change data capture (CDC) to migrate the database with minimal downtime.",
      "B. Create an Aurora read replica from the source database and promote it when caught up.",
      "C. Use an Aurora MySQL backup to restore to a new Aurora cluster and update the application connection string.",
      "D. Use mysqldump to export the database and import it into a new Aurora cluster.",
    ],
    correct: [0, 1],
    multiCorrect: true,
  },
  {
    id: 22,
    question:
      "A company is experiencing intermittent 502 Bad Gateway errors from their Application Load Balancer (ALB). The backend targets are EC2 instances running a Node.js application. Which combination of steps will help diagnose the issue? (Choose two.)",
    options: [
      "A. Check the ALB target health status and verify that targets are passing health checks.",
      "B. Review CloudWatch metrics for the ALB to identify patterns in when 502 errors occur.",
      "C. Enable access logs on the ALB and analyze the logs for failed requests.",
      "D. Check the security groups associated with the ALB and backend instances.",
      "E. Verify that the backend application is returning responses within the ALB idle timeout.",
    ],
    correct: [0, 4],
    multiCorrect: true,
  },
  {
    id: 23,
    question:
      "A company is designing a high availability architecture for a Tomcat-based web application with a MySQL database. The application requires session persistence and needs to handle 10,000 concurrent users. Which combination of changes will meet these requirements? (Choose three.)",
    options: [
      "A. Deploy Tomcat instances across multiple Availability Zones in an Auto Scaling group.",
      "B. Use Amazon RDS Multi-AZ for the MySQL database.",
      "C. Implement sticky sessions using the ALB session cookie.",
      "D. Use DynamoDB for session storage instead of local session management.",
      "E. Deploy a Network Load Balancer instead of Application Load Balancer.",
      "F. Implement ElastiCache for Redis session storage.",
    ],
    correct: [0, 1, 5],
    multiCorrect: true,
  },
  {
    id: 24,
    question:
      "A gaming company is building a platform to distribute game downloads. The downloads range from 500 MB to 50 GB. The company wants to minimize latency for global users while keeping costs low. Which approach will meet these requirements?",
    options: [
      "A. Store downloads in S3 and use S3 Transfer Acceleration for fast global access.",
      "B. Store downloads in S3 and use CloudFront to cache content at edge locations globally.",
      "C. Deploy the downloads to EC2 instances in each AWS Region.",
      "D. Use AWS Global Accelerator to route users to the nearest EC2 endpoint.",
    ],
    correct: 2,
  },
  {
    id: 25,
    question:
      "A company has an existing CloudFormation stack and wants to update it to include new resources without replacing existing resources. How can this be achieved?",
    options: [
      "A. Use CloudFormation drift detection to update the stack.",
      "B. Use CloudFormation import existing resources to add new resources to the stack.",
      "C. Create a new CloudFormation stack with the desired resources and update the application to point to the new stack.",
      "D. Delete the existing stack and recreate it with the updated template.",
    ],
    correct: 2,
  },
  {
    id: 26,
    question:
      "A company needs to inspect all outbound traffic from their VPC for security analysis. All traffic to the internet must pass through a centralized inspection point. Which solution will meet these requirements?",
    options: [
      "A. Deploy a transparent security proxy using EC2 instances in a central VPC.",
      "B. Use AWS Network Firewall with stateless rules to inspect traffic.",
      "C. Configure a VPC gateway endpoint for Amazon S3 and route all traffic through it.",
      "D. Deploy AWS WAF and configure it to inspect all outbound traffic.",
    ],
    correct: 0,
  },
  {
    id: 27,
    question:
      "A company is running a Lambda function that connects to an RDS PostgreSQL database. After deploying a new version of the application, Lambda functions are timing out when trying to connect to the database. What could be causing this issue?",
    options: [
      "A. The Lambda function's security group is blocking outbound traffic to the RDS instance.",
      "B. The RDS instance is in a different VPC than the Lambda function.",
      "C. The database credentials have expired.",
      "D. The Lambda function does not have a VPC connector configured.",
    ],
    correct: 3,
  },
  {
    id: 28,
    question:
      "A company wants to use AWS Elastic Disaster Recovery (DRS) to protect their on-premises servers. What is required to set up continuous replication with DRS?",
    options: [
      "A. Install the DRS Agent on all servers that need to be protected.",
      "B. Configure a Site-to-Site VPN between the on-premises network and AWS.",
      "C. Deploy a replication agent on an EC2 instance in the disaster recovery VPC.",
      "D. Create an AWS Direct Connect connection to enable replication.",
    ],
    correct: 1,
  },
  {
    id: 29,
    question:
      "A company has implemented AWS Control Tower and wants to enable securityHub within their organization. Which approach will ensure that Security Hub is enabled for all accounts?",
    options: [
      "A. Enable Security Hub manually in each account.",
      "B. Create a Service Control Policy (SCP) that requires all accounts to enable Security Hub.",
      "C. Use the Security Hub delegated administrator account to enable Security Hub organization-wide.",
      "D. Deploy Security Hub using AWS CloudFormation StackSets across all accounts.",
    ],
    correct: 3,
  },
  {
    id: 30,
    question:
      "A company serves content through CloudFront with an ALB origin. Users are reporting authentication failures when accessing the application through CloudFront. What could be causing this?",
    options: [
      "A. CloudFront is not forwarding authentication headers to the ALB.",
      "B. The ALB security group is not allowing traffic from CloudFront IP ranges.",
      "C. The SSL certificate on the ALB does not match the CloudFront distribution domain name.",
      "D. CloudFront is caching authenticated responses.",
    ],
    correct: 0,
  },
  {
    id: 31,
    question:
      "A company needs to migrate 50 EC2 instances from one AWS account to another with the fewest changes possible to the existing architecture. The instances are running in a VPC that has a CIDR block of 10.0.0.0/16. The target account also has a VPC with a CIDR block of 10.0.0.0/16. Which migration approach will meet these requirements?",
    options: [
      "A. Use VM Import/Export to create AMIs and copy them to the target account, then launch instances from the AMIs.",
      "B. Use AWS Systems Manager Automation to migrate the instances by creating new instances in the target account.",
      "C. Create a VPC peering connection between the two VPCs, then use rsync to migrate data while keeping the same IP addresses.",
      "D. Use AWS Application Migration Service for a lift-and-shift migration.",
    ],
    correct: 1,
  },
  {
    id: 32,
    question:
      "A company is experiencing performance issues with their DynamoDB table during peak traffic periods. The table is configured with on-demand capacity mode, but throttling is occurring. What could be causing this?",
    options: [
      "A. The table has reached its maximum provisioned throughput limit.",
      "B. A GSI (Global Secondary Index) is being throttled due to insufficient write capacity.",
      "C. The table's partition key is causing hot partitions.",
      "D. DynamoDB auto scaling is not configured for the table.",
    ],
    correct: 1,
  },
  {
    id: 33,
    question:
      "A company needs to transfer 60 TB of data from an on-premises NFS server to Amazon S3. The company has a 1 Gbps Direct Connect connection. Which approach will complete the transfer most cost-effectively?",
    options: [
      "A. Use AWS DataSync to transfer the data over the Direct Connect connection.",
      "B. Use S3 Transfer Acceleration with multipart upload.",
      "C. Ship the data using AWS Snowball Edge Storage Optimized devices.",
      "D. Use AWS S3 CLI with sync command over the Direct Connect connection.",
    ],
    correct: 0,
  },
  {
    id: 34,
    question:
      "A company is building a Lambda function that accesses secrets stored in AWS Secrets Manager. The Lambda function is deployed in a VPC. After a recent update, the Lambda function is unable to retrieve secrets. What could be causing this issue?",
    options: [
      "A. The Lambda function's execution role does not have permissions to access Secrets Manager.",
      "B. Secrets Manager VPC endpoint is not configured in the Lambda function's VPC.",
      "C. The Lambda function timeout is too short.",
      "D. The secrets in Secrets Manager have expired.",
    ],
    correct: 1,
  },
  {
    id: 35,
    question:
      "A company is building an order processing system using SQS and Lambda. Orders must be processed in the order they are received, and each order must be processed exactly once. How should this be implemented?",
    options: [
      "A. Use an SQS FIFO queue with a Lambda function as the consumer.",
      "B. Use an SQS standard queue with a Lambda function as the consumer and enable deduplication.",
      "C. Use an SQS FIFO queue with an EC2 instance as the consumer.",
      "D. Use Amazon Kinesis Data Streams with a Lambda function as the consumer.",
    ],
    correct: 1,
  },
  {
    id: 36,
    question:
      "A company needs to receive alerts when their monthly EC2 costs exceed a certain threshold. The company wants to receive alerts before the costs are incurred, not after. Which approach will meet these requirements?",
    options: [
      "A. Set up AWS Budgets with cost alerts to notify when forecasted costs exceed the threshold.",
      "B. Use CloudWatch alarms on AWS/Billing namespace metrics.",
      "C. Review the AWS Cost Explorer dashboard daily for cost forecasts.",
      "D. Enable detailed billing reports and analyze them with a Lambda function.",
    ],
    correct: 0,
  },
  {
    id: 37,
    question:
      "A company is deploying IoT devices that need to be provisioned securely at scale. Each device should receive unique credentials and be associated with a device certificate. Which AWS IoT service combination will meet these requirements?",
    options: [
      "A. Use AWS IoT Core with Just-in-Time Provisioning (JITP) to automatically provision devices.",
      "B. Use AWS IoT Device Management with fleet provisioning.",
      "C. Use AWS IoT Core with pre-provisioned certificates.",
      "D. Use AWS Systems Manager IoT to manage device provisioning.",
    ],
    correct: 2,
  },
  {
    id: 38,
    question:
      "A company wants to add multi-factor authentication (MFA) to their Cognito user pool. Users should be prompted for MFA when signing in from a new device. The application uses an ALB for authentication. How should MFA be implemented?",
    options: [
      "A. Enable MFA in the Cognito user pool and configure the ALB to forward MFA tokens.",
      "B. Use Cognito with an application load balancer that has authentication enabled.",
      "C. Implement MFA at the application level before calling Cognito.",
      "D. Use AWS IAM with MFA for all user authentication.",
    ],
    correct: 0,
  },
  {
    id: 39,
    question:
      "An organization wants to prevent all accounts in their AWS Organization from launching EC2 instances with public IP addresses. Which SCP will meet this requirement?",
    options: [
      "A. Create an SCP that denies ec2:RunInstances when the request includes a public IP address.",
      "B. Create an SCP that denies ec2:DescribeInstances with a condition for public IP addresses.",
      "C. Create an SCP that allows only specific instance types that do not support public IPs.",
      "D. Create an SCP that denies all ec2:* actions.",
    ],
    correct: 2,
  },
  {
    id: 40,
    question:
      "A company is building a multi-tenant SaaS application where each tenant's data is stored in a dedicated DynamoDB table. The company wants to optimize costs by sharing infrastructure across tenants while maintaining data isolation. Which approach will meet these requirements?",
    options: [
      "A. Use DynamoDB shared table mode with tenant ID as the partition key.",
      "B. Provision separate capacity for each tenant's table.",
      "C. Use DynamoDB on-demand mode for all tenant tables.",
      "D. Store all tenant data in a single S3 bucket with tenant-specific prefixes.",
    ],
    correct: 1,
  },
  {
    id: 41,
    question:
      "A company is setting up a CI/CD pipeline using CodePipeline. The pipeline pulls code from GitHub and runs builds on Jenkins instances. The pipeline should trigger builds when code is pushed to GitHub. How should this be configured?",
    options: [
      "A. Configure a CodePipeline webhook that triggers on GitHub push events.",
      "B. Use a Jenkins plugin to poll GitHub for code changes.",
      "C. Schedule CodePipeline to run builds at regular intervals.",
      "D. Configure GitHub to call the CodePipeline API on each push.",
    ],
    correct: 1,
  },
  {
    id: 42,
    question:
      "A company needs to enforce MFA deletion on their S3 buckets to prevent accidental deletion of data. Which combination of steps will meet this requirement? (Choose two.)",
    options: [
      "A. Enable versioning on the S3 bucket.",
      "B. Enable MFA delete on the S3 bucket.",
      "C. Create an IAM policy that requires MFA for s3:DeleteObject action.",
      "D. Enable S3 Object Lock with governance mode.",
      "E. Use S3 Intelligent-Tiering to protect the data.",
    ],
    correct: [0, 1],
    multiCorrect: true,
  },
  {
    id: 43,
    question:
      "A company is building a SaaS application where tenants will have their own isolated database schemas in an RDS PostgreSQL database. Each tenant should have dedicated resources and the application should scale automatically. Which database architecture will meet these requirements?",
    options: [
      "A. Use RDS PostgreSQL with a separate database for each tenant.",
      "B. Use Amazon Aurora Serverless with per-tenant databases.",
      "C. Use a multi-tenant architecture with row-level security in a shared database.",
      "D. Use Amazon DynamoDB with tenant-specific tables.",
    ],
    correct: 3,
  },
  {
    id: 44,
    question:
      "A company is planning a migration from a VMware on-premises environment to AWS. The company wants to discover existing servers and understand their dependencies before migration. Which approach will meet these requirements?",
    options: [
      "A. Deploy the AWS Application Discovery Service agentless connector in the VMware environment.",
      "B. Use AWS Direct Connect to connect to VMware and use VM Import.",
      "C. Install the Systems Manager agent on each VM manually.",
      "D. Export the VMware inventory to a CSV and import it into Migration Hub.",
    ],
    correct: 0,
  },
  {
    id: 45,
    question:
      "A company is building a gaming platform that serves game downloads from S3. The downloads are large files (5-50 GB) and the company wants to minimize latency for global users. The company also wants to protect the content from unauthorized access. Which approach will meet these requirements?",
    options: [
      "A. Store downloads in S3 and serve them through CloudFront with signed URLs.",
      "B. Store downloads in S3 and use S3 Transfer Acceleration for all downloads.",
      "C. Deploy downloads to EC2 instances in multiple regions.",
      "D. Use AWS Global Accelerator with EC2 instances serving the downloads.",
    ],
    correct: 2,
  },
  {
    id: 46,
    question:
      "A company is deploying infrastructure across multiple accounts using CloudFormation StackSets. The company wants to ensure that IAM roles are created consistently across all accounts. Which approach will meet these requirements?",
    options: [
      "A. Create the IAM roles as part of the StackSet template and use self-managed permissions.",
      "B. Pre-create IAM roles in each account before deploying the StackSet.",
      "C. Use AWS Organizations service control policies to create IAM roles.",
      "D. Deploy IAM roles using AWS Config conformance packs.",
    ],
    correct: 0,
  },
  {
    id: 47,
    question:
      "A company has enabled Security Hub in their organization and wants to designate a specific account as the Security Hub administrator for all member accounts. Which approach will meet this requirement?",
    options: [
      "A. Use the Security Hub console to designate a member account as the administrator.",
      "B. Use AWS Organizations to set the Security Hub delegated administrator.",
      "C. Create an SCP that enforces Security Hub enablement in all accounts.",
      "D. Enable Security Hub manually in each account and configure cross-account settings.",
    ],
    correct: 3,
  },
  {
    id: 48,
    question:
      "A company is designing a disaster recovery strategy for their multi-tier web application. The application uses an RDS PostgreSQL database with read replicas. The company wants to achieve an RPO of 1 minute and an RTO of 15 minutes. Which architecture will meet these requirements?",
    options: [
      "A. Use RDS Multi-AZ with synchronous replication and configure automated backups.",
      "B. Use RDS with a read replica in a secondary Region and use CloudFormation for automated failover.",
      "C. Use Aurora Global Database with automatic failover to a secondary Region.",
      "D. Use RDS with automated snapshots and restore manually in case of failure.",
    ],
    correct: 2,
  },
  {
    id: 49,
    question:
      "A company needs to implement a centralized logging solution for all AWS accounts in their organization. The company wants to query logs using SQL. Which combination of steps will meet these requirements? (Choose two.)",
    options: [
      "A. Configure CloudTrail to send logs to an S3 bucket in a central account.",
      "B. Use CloudWatch Logs to aggregate logs from all accounts.",
      "C. Use Amazon Athena to query CloudTrail logs stored in S3.",
      "D. Configure VPC Flow Logs in each account and send them to CloudWatch.",
      "E. Use AWS X-Ray for distributed tracing across accounts.",
    ],
    correct: [0, 2],
    multiCorrect: true,
  },
  {
    id: 50,
    question:
      "A company is running a web application on EC2 instances behind an ELB. The company wants to implement SSL/TLS termination at the ELB level while ensuring that traffic between the ELB and backend instances is encrypted. Which configuration will meet these requirements?",
    options: [
      "A. Attach an ACM certificate to the ELB and enable SSL on the backend instances.",
      "B. Attach an ACM certificate to the ELB and use a self-signed certificate on backend instances.",
      "C. Use a third-party certificate on the ELB and terminate SSL on backend instances.",
      "D. Configure the ELB for pass-through SSL and terminate SSL on the backend instances.",
    ],
    correct: 0,
  },
];