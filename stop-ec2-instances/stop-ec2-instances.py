import boto3
import os

# Grad Lambda Environment Variables
region =  os.environ['region']
instances = os.environ['instanceIds'].split(",")

def lambda_handler(event, context):
    ec2 = boto3.client('ec2', region_name=region)
    ec2.stop_instances(InstanceIds=instances)
    print ('stopped your instances: ' + str(instances))