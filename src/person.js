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
    description: 'Programming and watching cute cat videos.',
    project: [{
      name: 'Octopus house',
      description: 'A test as a service platform, providing common used services like proxySSO, data injection with both RESTful backend and web UI',
      stack: ['Mesos', 'Docker', 'Flask', 'React', 'Bootstrap', 'Redux']
    },
      {
        name: 'System test automation',
        description: 'A test framework used for all system automation test cases, integrated with several pytest plugins which can detect crashes and collect test logs in real time. ',
        stack: ['pytest', 'paramiko']
      },
      {
        name: 'splunk-env-switcher',
        description: 'A cmdline tool to easily switch a cluster of splunk to a different configuration set',
        stack: ['Ansible']
      },
      {
        name: 'splunk-build-manager',
        description: 'A static web server which used to fetch product build from remote server regularly',
        stack: ['twistd', 'requests']
      },
      {
        name: 'thunderbolt100k',
        description: 'An open source project (https://github.com/cuyu/thunderbolt100k) which used to customise zsh theme',
        stack: ['python-daemon']
      }
    ]
  }],
  education: [{
    degree: 'Master of Arts',
    timeperiod: 'September 2012 - July 2015',
    description: 'Major in Hacking and Computer Penetration, Xi\'an Jiaotong University, Xi\'an, China.'
  },
    {
      degree: 'Bachelor of Science',
      timeperiod: 'September 2008 - July 2012',
      description: 'Major in Automation, Xi\'an Jiaotong University, Xi\'an, China.'
    }
  ],
  // skill level goes 0 to 100
  skills: [{
    name: 'Python',
    level: '95'
  },
    {
      name: 'pytest',
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
      name: 'Kafka',
      level: '80'
    },
    {
      name: 'Docker',
      level: '80'
    }
  ],
  skillDescription: 'Also proficient in Adobe Photoshop and Illustrator, grew up bilingual (English and Klingon).',
  contact: {
    email: 'icyarm@icloud.com',
    phone: '137-6433-3209',
    street: '1234 Broadway',
    city: 'Shanghai',
    website: 'http://cuyu.github.com',
    github: 'cuyu'
  }
}
