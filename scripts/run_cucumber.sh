cucumber-js features/**/*.feature -r step_definitions/ -r support/ -f html:test_reports/cucumber_report.html -f json:test_reports/cucumber_report.json -t @POC-35 --publish-quiet