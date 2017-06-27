export let tweets = [
  {
    "user": {
      "id": "6",
      "first_name": "Marine",
      "last_name": "ARZIC",
      "manager_id": "1",
      "department": "MARK/ENG/PRI/AME",
      "city": "New York",
      "job_title": "VIE"
    },
    "type": "arrival",
    "date": "2016-08-01",
    "entities": {
      "hashtags": [
        "VIE"
      ],
      "user_mentions": [
        "6"
      ]
    },
    "deltas": {
      "id": {
        "from": null,
        "to": "6"
      },
      "first_name": {
        "from": null,
        "to": "Marine"
      },
      "last_name": {
        "from": null,
        "to": "ARZIC"
      },
      "manager_id": {
        "from": null,
        "to": "1"
      },
      "department": {
        "from": null,
        "to": "MARK/ENG/PRI/AME"
      },
      "city": {
        "from": null,
        "to": "New York"
      },
      "job_title": {
        "from": null,
        "to": "VIE"
      }
    },
    "source": "<i class=\"fa fa-star\" aria-hidden=\"true\"></i> <a href=\"#\">@Marine ARZIC</a> joined SG as <a href=\"#\">#VIE</a>"
  },
  {
    "user": {
      "id": "0",
      "first_name": "Axel",
      "last_name": "DELAMARRE",
      "manager_id": "1",
      "department": "MARK/ENG/PRI/AME",
      "city": "New York",
      "job_title": "VIE",
      "manager": {
        "id": "0",
        "first_name": "Nathanael",
        "last_name": "BIENVENU",
        "manager_id": "2",
        "department": "MARK/ENG/PRI/AME",
        "city": "New York",
        "job_title": "Head of Pricing"
      }
    },
    "type": "change",
    "date": "2016-08-01",
    "entities": {
      "hashtags": [
        "Paris",
        "New York"
      ],
      "user_mentions": [
        "0"
      ]
    },
    "deltas": {
      "city": {
        "from": "Paris",
        "to": "New York"
      },
      "manager_id": {
        "from": "",
        "to": "1"
      },
      "department": {
        "from": "MARK/EQD/ENG/PRI",
        "to": "MARK/ENG/PRI/AME"
      },
      "job_title": {
        "from": "Developer",
        "to": "VIE"
      }
    },
    "source": "<i class=\"fa fa-plane\" aria-hidden=\"true\"></i> <a href=\"#\">@Axel DELAMARRE</a> moved from <a href=\"#\">#Paris</a> to <a href=\"#\">#New York</a>"
  },
  {
    "user": {
      "id": "3",
      "first_name": "Jerome",
      "last_name": "MARTINAUD",
      "manager_id": "1",
      "department": "MARK/ENG/PRI/AME",
      "city": "New York",
      "job_title": "Junior Algo Developer",
      "manager": {
        "id": "3",
        "first_name": "Nathanael",
        "last_name": "BIENVENU",
        "manager_id": "2",
        "department": "MARK/ENG/PRI/AME",
        "city": "New York",
        "job_title": "Head of Pricing"
      }
    },
    "type": "change",
    "date": "2016-09-01",
    "entities": {
      "hashtags": [
        "Hong-Kong",
        "New York"
      ],
      "user_mentions": [
        "3"
      ]
    },
    "deltas": {
      "city": {
        "from": "Hong-Kong",
        "to": "New York"
      },
      "manager_id": {
        "from": "",
        "to": "1"
      },
      "department": {
        "from": "MARK/TRD/ARD",
        "to": "MARK/ENG/PRI/AME"
      },
      "job_title": {
        "from": "Quantitative Analyst",
        "to": "Junior Algo Developer"
      }
    },
    "source": "<i class=\"fa fa-plane\" aria-hidden=\"true\"></i> <a href=\"#\">@Jerome MARTINAUD</a> moved from <a href=\"#\">#Hong-Kong</a> to <a href=\"#\">#New York</a>"
  },
  {
    "user": {
      "id": "4",
      "first_name": "Hanine",
      "last_name": "ADJOU",
      "manager_id": "1",
      "department": "MARK/ENG/PRI/AME",
      "city": "New York",
      "job_title": "VIE",
      "manager": {
        "id": "4",
        "first_name": "Nathanael",
        "last_name": "BIENVENU",
        "manager_id": "2",
        "department": "MARK/ENG/PRI/AME",
        "city": "New York",
        "job_title": "Head of Pricing"
      }
    },
    "type": "change",
    "date": "2016-09-01",
    "entities": {
      "hashtags": [
        "Paris",
        "New York"
      ],
      "user_mentions": [
        "4"
      ]
    },
    "deltas": {
      "city": {
        "from": "Paris",
        "to": "New York"
      },
      "manager_id": {
        "from": "",
        "to": "1"
      },
      "department": {
        "from": "MARK/EQD/ENG/PRI",
        "to": "MARK/ENG/PRI/AME"
      },
      "job_title": {
        "from": "Developer Front-Office",
        "to": "VIE"
      }
    },
    "source": "<i class=\"fa fa-plane\" aria-hidden=\"true\"></i> <a href=\"#\">@Hanine ADJOU</a> moved from <a href=\"#\">#Paris</a> to <a href=\"#\">#New York</a>"
  },
  {
    "user": {
      "id": "7",
      "first_name": "Ganesh",
      "last_name": "BHANDARI",
      "manager_id": "5",
      "department": "MARK/ENG/PRI/AME",
      "city": "New York",
      "job_title": "Intern II"
    },
    "type": "arrival",
    "date": "2016-10-01",
    "entities": {
      "hashtags": [
        "Intern II"
      ],
      "user_mentions": [
        "7"
      ]
    },
    "deltas": {
      "id": {
        "from": null,
        "to": "7"
      },
      "first_name": {
        "from": null,
        "to": "Ganesh"
      },
      "last_name": {
        "from": null,
        "to": "BHANDARI"
      },
      "manager_id": {
        "from": null,
        "to": "5"
      },
      "department": {
        "from": null,
        "to": "MARK/ENG/PRI/AME"
      },
      "city": {
        "from": null,
        "to": "New York"
      },
      "job_title": {
        "from": null,
        "to": "Intern II"
      }
    },
    "source": "<i class=\"fa fa-star\" aria-hidden=\"true\"></i> <a href=\"#\">@Ganesh BHANDARI</a> joined SG as <a href=\"#\">#Intern II</a>"
  },
  {
    "user": {
      "id": "1",
      "first_name": "Nathanael",
      "last_name": "BIENVENU",
      "manager_id": "8",
      "department": "MARK/ENG/PRI/AME",
      "city": "New York",
      "job_title": "Head of Pricing",
      "manager": {
        "id": "1",
        "first_name": "Julien",
        "last_name": "GIMBRERE",
        "manager_id": "",
        "department": "MARK/ENG/DIR",
        "city": "New York",
        "job_title": "Head of Engineering"
      }
    },
    "type": "change",
    "date": "2017-01-01",
    "entities": {
      "hashtags": [],
      "user_mentions": [
        "1",
        "1"
      ]
    },
    "deltas": {
      "manager_id": {
        "from": "2",
        "to": "8"
      }
    },
    "source": "<i class=\"fa fa-random\" aria-hidden=\"true\"></i> <a href=\"#\">@Nathanael BIENVENU</a> now reports to <a href=\"#\">@Julien GIMBRERE</a>"
  },
  {
    "user": {
      "id": "2",
      "first_name": "Simon",
      "last_name": "LETORT",
      "manager_id": "",
      "department": "GBIS/CDO",
      "city": "New York",
      "job_title": "Chief Digital Officer"
    },
    "type": "change",
    "date": "2017-01-01",
    "entities": {
      "hashtags": [
        "Head of Engineering",
        "Chief Digital Officer"
      ],
      "user_mentions": [
        "2"
      ]
    },
    "deltas": {
      "department": {
        "from": "MARK/ENG/DIR",
        "to": "GBIS/CDO"
      },
      "job_title": {
        "from": "Head of Engineering",
        "to": "Chief Digital Officer"
      }
    },
    "source": "<i class=\"fa fa-handshake-o\" aria-hidden=\"true\"></i> <a href=\"#\">@Simon LETORT</a> is now <a href=\"#\">#Head of Engineering</a> (previously <a href=\"#\">#Chief Digital Officer</a>)"
  },
  {
    "user": {
      "id": "8",
      "first_name": "Julien",
      "last_name": "GIMBRERE",
      "manager_id": "",
      "department": "MARK/ENG/DIR",
      "city": "New York",
      "job_title": "Head of Engineering"
    },
    "type": "change",
    "date": "2017-01-01",
    "entities": {
      "hashtags": [
        "Head of Structuring",
        "Head of Engineering"
      ],
      "user_mentions": [
        "8"
      ]
    },
    "deltas": {
      "manager_id": {
        "from": "2",
        "to": ""
      },
      "department": {
        "from": "MARK/ENG/CSG/AME",
        "to": "MARK/ENG/DIR"
      },
      "job_title": {
        "from": "Head of Structuring",
        "to": "Head of Engineering"
      }
    },
    "source": "<i class=\"fa fa-handshake-o\" aria-hidden=\"true\"></i> <a href=\"#\">@Julien GIMBRERE</a> is now <a href=\"#\">#Head of Structuring</a> (previously <a href=\"#\">#Head of Engineering</a>)"
  },
  {
    "user": {
      "id": "5",
      "first_name": "Rodrigo",
      "last_name": "FERNANDEZ",
      "manager_id": "1",
      "department": "MARK/ENG/PRI/AME",
      "city": "New York",
      "job_title": "Pricer"
    },
    "type": "departure",
    "date": "2017-03-12",
    "entities": {
      "hashtags": [],
      "user_mentions": [
        "5"
      ]
    },
    "deltas": {
      "id": {
        "from": "5",
        "to": null
      },
      "first_name": {
        "from": "Rodrigo",
        "to": null
      },
      "last_name": {
        "from": "FERNANDEZ",
        "to": null
      },
      "manager_id": {
        "from": "1",
        "to": null
      },
      "department": {
        "from": "MARK/ENG/PRI/AME",
        "to": null
      },
      "city": {
        "from": "New York",
        "to": null
      },
      "job_title": {
        "from": "Pricer",
        "to": null
      }
    },
    "source": "<i class=\"fa fa-suitcase\" aria-hidden=\"true\"></i> <a href=\"#\">@Rodrigo FERNANDEZ</a> left"
  },
  {
    "user": {
      "id": "7",
      "first_name": "Ganesh",
      "last_name": "BHANDARI",
      "manager_id": "1",
      "department": "MARK/ENG/PRI/AME",
      "city": "New York",
      "job_title": "Intern II",
      "manager": {
        "id": "7",
        "first_name": "Nathanael",
        "last_name": "BIENVENU",
        "manager_id": "8",
        "department": "MARK/ENG/PRI/AME",
        "city": "New York",
        "job_title": "Head of Pricing"
      }
    },
    "type": "change",
    "date": "2017-03-12",
    "entities": {
      "hashtags": [],
      "user_mentions": [
        "7",
        "7"
      ]
    },
    "deltas": {
      "manager_id": {
        "from": "5",
        "to": "1"
      }
    },
    "source": "<i class=\"fa fa-random\" aria-hidden=\"true\"></i> <a href=\"#\">@Ganesh BHANDARI</a> now reports to <a href=\"#\">@Nathanael BIENVENU</a>"
  }
];