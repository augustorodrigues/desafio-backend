define({ "api": [
  {
    "type": "delete",
    "url": "/rules/:id",
    "title": "Remove a schedule rule",
    "group": "Schedule_Rules",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Schedule Rule id to delete</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Delete error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        },
        {
          "title": "Delete error",
          "content": "HTTP/1.1 400 Not found\n[{ \n  \"error\": \"Schedule rule not found\" \n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes.ts",
    "groupTitle": "Schedule_Rules",
    "name": "DeleteRulesId"
  },
  {
    "type": "get",
    "url": "/rules",
    "title": "List all schedule rules",
    "group": "Schedule_Rules",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ScheduleRule[]",
            "optional": false,
            "field": "scheduleRule",
            "description": "<p>Schedule Rules list</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "tasks.id",
            "description": "<p>id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "tasks.ruleType",
            "description": "<p>type [SPECIFIC_DATE, DAILY, WEEKLY]</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "tasks.weekdays",
            "description": "<p>weekdays</p>"
          },
          {
            "group": "Success 200",
            "type": "Interval[]",
            "optional": false,
            "field": "tasks.interval",
            "description": "<p>intervals</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "tasks.interval.start",
            "description": "<p>interval start</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "tasks.interval.end",
            "description": "<p>interval end</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": " HTTP/1.1 200 OK\n [{\n   \"id\": 1,\n   \"ruleType\": \"DAILY\",\n   \"days\": [\"2019-08-20\"],\n   \"weekdays\": [\n       \"SEGUNDA-FEIRA\",\n       \"QUARTA-FEIRA\"\n   ],\n   \"intervals\": [\n       {\n           \"start\": \"08:00\",\n           \"end\": \"09:00\"\n       }\n   ]       \n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes.ts",
    "groupTitle": "Schedule_Rules",
    "name": "GetRules"
  },
  {
    "type": "post",
    "url": "/rules",
    "title": "Save one schedule rule",
    "group": "Schedule_Rules",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ScheduleRule[]",
            "optional": false,
            "field": "scheduleRule",
            "description": "<p>Schedule Rules list</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "tasks.id",
            "description": "<p>id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "tasks.ruleType",
            "description": "<p>type [SPECIFIC_DATE, DAILY, WEEKLY]</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "tasks.weekdays",
            "description": "<p>weekdays</p>"
          },
          {
            "group": "Success 200",
            "type": "Interval[]",
            "optional": false,
            "field": "tasks.interval",
            "description": "<p>intervals</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "tasks.interval.start",
            "description": "<p>interval start</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "tasks.interval.end",
            "description": "<p>interval end</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": " HTTP/1.1 200 OK\n [{\n   \"id\": 1,\n   \"ruleType\": \"DAILY\",\n   \"days\": [\"2019-08-20\"],\n   \"weekdays\": [\n       \"SEGUNDA-FEIRA\",\n       \"QUARTA-FEIRA\"\n   ],\n   \"intervals\": [\n       {\n           \"start\": \"08:00\",\n           \"end\": \"09:00\"\n       }\n   ]       \n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error\n[{\n  \"error\": \"Interval already in use in this day\"\n}]",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "HTTP/1.1 400 Internal Server Error\n[{\n  \"error\": \"Rule type not found\"\n}]",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "HTTP/1.1 400 Internal Server Error\n[{\n  \"error\": \"Day not found\"\n}]",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "HTTP/1.1 400 Internal Server Error\n[{\n  \"error\": \"Weekday not found\"\n}]",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "HTTP/1.1 400 Internal Server Error\n[{\n  \"error\": \"Interval not found\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes.ts",
    "groupTitle": "Schedule_Rules",
    "name": "PostRules"
  },
  {
    "type": "post",
    "url": "/rules/availableHours",
    "title": "List all schedule rules between the start and end dates",
    "group": "Schedule_Rules",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "startDate",
            "description": "<p>start date</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "endDate",
            "description": "<p>end date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n   \"start\": \"08:00\",\n   \"end\": \"09:00\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes.ts",
    "groupTitle": "Schedule_Rules",
    "name": "PostRulesAvailablehours"
  }
] });