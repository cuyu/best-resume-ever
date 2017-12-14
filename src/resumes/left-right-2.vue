<template>
  <div class="resume" id="resume1">
    <div class="leave-space">
    </div>
    <div class="left half">
      <div class="experience">
        <h3>Experience</h3>
        <div class="experience-block" v-for="experience in person.experience">
          <!--<span class="company"> {{experience.company}} </span>-->
          <!--<span class="job-title"> {{experience.position}} </span>-->
          <!--<span class="time-period"> {{experience.timeperiod}}</span>-->
          <!--<span class="job-description"> {{experience.description}} </span>-->
          <div class="project-block" v-for="project in experience.projectPage2">
            <div class="project-name"> {{project.name}} </div>
            <p class="project-info"> {{project.description}} </p>
            <span class="tech-stack" v-for="stack in project.stack"> {{stack}} </span>
          </div>
        </div>
      </div>
    </div>
    <div class="right half">
      <div class="achievement">
        <h3>Achievements</h3>
        <div class="achievement-block" v-for="achievement in person.achievements">
          <i v-bind:class="['fa', achievement.icon]"></i>
          <span class="achievement-name">
          <a v-if="achievement.link" :href="achievement.link"> {{achievement.name}} </a>
          <div v-else> {{achievement.name}} </div>
        </span>
        </div>
      </div>
      <div class="assessment">
        <h3>Self Assessment</h3>
        <ul class="assessment-items">
          <li v-for="assessment in person.selfAssessment">
            {{assessment}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    PERSON
  } from '../person';

  import Vue from 'vue';
  export default Vue.component('left-right-2', {
    name: 'left-right-2',
    data () {
      return {
        person: PERSON
      };
    }
  });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  #resume1 {
    font-family:'Source Sans Pro', sans-serif;
    font-size:20px;
    padding-bottom:50px;
    .leave-space {
      margin-top:70px;
    }
    a, a:focus, a:hover, a:visited {
      color:#616161;
    }
    h3 {
      margin-top: 10px;
      margin-bottom:0;
    }
    span {
      display:inline-block;
    }
    .row {
      width:100%;
    }
    .half {
      width:45%;
    }
    .half.left {
      float:left;
      text-align:right;
      padding-left:3.5%;
      padding-right:1.5%;
    }
    .half.right {
      float:right;
      text-align:left;
      padding-right:3.5%;
      padding-left:1.5%;
    }
    .center {
      margin-left:auto;
      margin-right:auto;
    }
    .text-center {
      text-align:center;
    }
    .name {
      border:1px solid black;
      text-transform:uppercase;
      padding:10px 20px;
      margin-top:70px;
      margin-bottom:5px;
      font-family:'Open Sans', sans-serif;
      font-size:35px;
      font-weight:600;
      letter-spacing:10px;
    }
    .position {
      text-transform:uppercase;
      font-family:'Open Sans', sans-serif;
      font-size:smaller;
      color:#757575;
      margin-bottom:20px;
    }
    .image {
      width:100px;
      height:100px;
      margin-top:20px;
      margin-bottom:25px;
      .img {
        width:100%;
        height:100%;
        border-radius:50%;
        background-image:url('../assets/person.jpg');
        background-repeat:none;
        background-position:center;
        background-size:cover;
      }
    }
    .contact {
      width:100%;
      overflow: hidden;
      table {
        text-align:right;
        float:right;
        margin-top:5px;
        color:#616161;
        font-size:20px;
        i {
          padding:2px;
          color:#616161;
        }
        tr td:nth-child(2) {
          vertical-align:top;
        }
      }
    }
    .experience .experience-block span {
      width:100%;
      color:#616161;
    }
    .experience .experience-block span.company {
      font-weight:bold;
      padding-bottom:5px;
      padding-top:10px;
      color:#424242;
    }
    .experience .experience-block span.job-title {
      font-style:italic;
    }
    .experience .experience-block .project-block {
      .project-info {
        font-size:15px;
        color: slategray;
        margin-top:5px;
        margin-bottom: 0;
      }
      .tech-stack::before {
        content: "\f0f4";
        font-family: FontAwesome;
        padding-left: .2em;
        padding-right: .2em;
      }
      .tech-stack {
        border: 1px solid;
        border-radius: 5px;
        font-size:13px;
        margin-right: .3em;
        padding-right: .2em;
        display: inline-block;
        width: auto;
      }
      .project-name::after {
        content: "\f13d";
        font-family: FontAwesome;
        padding-right: .2em;
        color: #424242;
        font-size: .9em;
      }
      .project-name {
        margin-top: 10px;
        margin-bottom: 0;
      }
    }
    .achievement-block {
      display: flex;
      font-size: 18px;
      margin-top: 5px;
      color: #616161;
      i {
        margin-top: .3em;
        margin-right: .3em;
      }
    }
    .assessment-items {
      font-size: 18px;
      color: #616161;
      margin-top: 5px;
    }
    .education-block span {
      color:#616161;
    }
    .education-block span.degree {
      font-weight:bold;
      padding-bottom:5px;
      padding-top:10px;
      color:#424242;
    }
    .skills-other {
      color:#616161;
      margin-bottom:0;
      .knowledge {
        color: #424242;
        font-weight: bold;
      }
      // insert comma after each knowledge name
      .knowledge::after {
        content: ', ';
        font-weight: normal;
        color: #616161;
        margin-right: .2em;
      }
    }
    .skills {
      margin-top:10px;
      margin-bottom:10px;
      .skill-block {
        padding-bottom: 5px;
        display:flex;
        flex-direction: row;
        align-items: center;
        column-count: 2;
        .skill {
          width:100px;
          color:#616161;
          float:left;
        }
        .skill-bar {
          float:right;
          background:#e0e0e0;
          overflow:hidden;
          height:8px;
          border-radius:3px;
          margin-top:6.5px;
          position:relative;
          width:249px;
          .level {
            background:#757575;
            height:100%;
          }
        }
      }
    }
  }
</style>
