dotenv -- cross-var curl -H "Content-Type: application/json" -X POST -u %JIRA_USER%:%JIRA_PSWD% --data @test_reports/cucumber_report.json 'http://localhost:8080/rest/raven/latest/import/execution/cucumber'