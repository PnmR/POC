dotenv -- cross-var curl -G -u %JIRA_USER%:%JIRA_PSWD% -o output/features.zip 'http://localhost:8080/rest/raven/latest/export/test?keys=POC-10&fz=true' && unzip output/features.zip -d features/xray_tests