#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { ApiGatewayLambdaS3Stack } from '../lib/api-gateway-lambda-s3-stack';

const app = new cdk.App();
new ApiGatewayLambdaS3Stack(app, 'ApiGatewayLambdaS3Stack');
