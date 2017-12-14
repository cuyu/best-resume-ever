/* eslint-disable */
export const PERSON = {
  name: {
    first: 'Chong',
    last: 'Yu',
  },
  position: 'Software Engineer',
  birth: {
    year: 1990,
    location: 'Jiangsu'
  },
  experience: [{
    company: 'Splunk',
    position: 'Software QA Engineer',
    timeperiod: 'since June 2015',
    description: 'Testing and tooling.',
    projectPage1: [
      {
        name: 'System test automation',
        description: 'A test framework used for all system automation test cases, integrated with several pytest plugins which can detect crashes and collect test logs in real time. ',
        stack: ['pytest', 'paramiko']
      },
      {
        name: 'Octopus house',
        description: 'A test as a service platform, providing common used services like proxySSO, data injection with both RESTful backend and web UI',
        stack: ['Mesos', 'Docker', 'Flask', 'React', 'Bootstrap']
      },
      {
        name: 'splunk-env-switcher',
        description: 'A cmdline tool to switch a cluster of splunk to a set of different configuration set easily',
        stack: ['Ansible', 'mongodb']
      },
    ],
    projectPage2: [
      {
        name: 'datapump',
        description: 'A platform to collect data from many sources (using API and crawler) and dispatch data as demand',
        stack: ['Mesos', 'Auraro', 'Kafka', 'scrapy', 'Flask']
      },
      {
        name: 'CSI',
        description: 'A tool to help triage python code, winning the best internal tool of 5th global hackweek',
        stack: ['React', 'Jenkins', 'Serialization']
      },
      {
        name: 'decade',
        description: 'A cmdline tool to configure remote debugging in docker container or remote server with PyCharm',
        stack: ['Docker', 'paramiko']
      },
    ]
  }],
  education: [{
    degree: 'Master of Engineering',
    timeperiod: 'September 2012 - July 2015',
    description: 'Major in Artificial ntelligence and Pattern Recognition, Xi\'an Jiaotong University, Xi\'an, China.'
  },
    {
      degree: 'Bachelor of Engineering',
      timeperiod: 'September 2008 - July 2012',
      description: 'Major in Automation and Computer Science , Xi\'an Jiaotong University, Xi\'an, China.'
    }
  ],
  achievements: [
    {
      name: 'Winner of 2nd, 4th hackweek in splunk shanghai and 5th hackweek in splunk global',
      icon: 'fa-trophy',
    },
    {
      name: 'Receive spot award of splunk, three times',
      icon: 'fa-trophy',
    },
    {
      name: 'Scene Text Localization using Edge Analysis and Feature Pool, Neurocomputing, 2016',
      link: 'http://www.sciencedirect.com/science/article/pii/S0925231215015817',
      icon: 'fa-newspaper-o',
    },
  ],
  // skill level goes 0 to 100
  skills: [{
    name: 'Python',
    level: '95'
  },
    {
      name: 'JavaScript',
      level: '85'
    },
    {
      name: 'React',
      level: '80'
    },
    {
      name: 'C++',
      level: '70'
    },
    {
      name: 'CSS',
      level: '60'
    },
    {
      name: 'Machine Learning',
      level: '70'
    },
    {
      name: 'Docker',
      level: '75'
    },
  ],
  otherKnowledge: ['pytest', 'ansible', 'git', 'GraphQL', 'Jenkins', 'scrapy', 'flask', 'Kafka', 'Mesos', 'Bootstrap'],
  contact: {
    email: 'icyarm@icloud.com',
    phone: '137-6433-3209',
    city: 'Shanghai',
    website: 'http://cuyu.github.io',
    github: 'cuyu'
  },
  selfAssessment: ['I am an enthusiastic person and love innovation and collaboration',
    'Have strong learning ability and willing to take new projects from scratch',
    'Be responsible and keep commitments',
    'Easy going and warm hearted'],
}
