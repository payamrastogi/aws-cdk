import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';


export class AwsCdkAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //👇 use the Bucket construct
    //scope: parent construct within which the child construct is initialized
    //id must be unique within the scope
    //props: key value pairs used to set config
    const bucket = new s3.Bucket(this, 'aws-cdk-app-20230217-bucket', {
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });

    //👇 use the Table construct
    const table = new dynamodb.Table(this, 'todos-table', {
      partitionKey: {name: 'todoId', type: dynamodb.AttributeType.NUMBER},
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });

    new cdk.CfnOutput(this, 'bucketName', {
      value: bucket.bucketName,
    });
    new cdk.CfnOutput(this, 'tableName', {value: table.tableName});  
  }
}
