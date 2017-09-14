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
    description: 'Programming and testing.',
    project: [
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
        description: 'A cmdline tool to switch a cluster of splunk to a different configuration set easily',
        stack: ['Ansible']
      },
      {
        name: 'datapump',
        description: 'A platform to collect data from many sources and dispatch data as demand',
        stack: ['Mesos', 'Auraro', 'Kafka', 'scrapy', 'Flask']
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
      name: 'Winner of 2nd and 4th hackweek in splunk shanghai',
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
      name: 'Docker',
      level: '80'
    },
    {
      name: 'Machine Learning',
      level: '70'
    }
  ],
  otherKnowledge: ['pytest', 'ansible', 'scrapy', 'flask', 'Kafka', 'Mesos', 'Bootstrap'],
  contact: {
    email: 'icyarm@icloud.com',
    phone: '137-6433-3209',
    city: 'Shanghai',
    website: 'http://cuyu.github.io',
    github: 'cuyu'
  }
}
