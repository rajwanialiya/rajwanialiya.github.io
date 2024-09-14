<template>
  <div class="fp-auto-height view-wrap">
    <div class="project-display">
      <div v-if="isImageFirst" class="image">
        <router-link v-if="internalLink" :to="internalLink">
          <img :src="project.imageSrc" :alt="project.title" />
        </router-link>
        <a v-else :href="externalLink" target="_blank">
          <img :src="project.imageSrc" :alt="project.title" />
        </a>
      </div>
      <div
        :class="[
          'writing',
          { 'writing-first': isImageFirst, 'writing-second': !isImageFirst }
        ]"
      >
        <div class="intro">
          <p>{{ project.category }}</p>
          <h2>
            <router-link v-if="internalLink" :to="internalLink">{{
              project.title
            }}</router-link>
            <a v-else :href="externalLink" target="_blank">{{
              project.title
            }}</a>
          </h2>
        </div>
        <div class="main">
          <p class="blurb">{{ project.description }}</p>
          <div class="links">
            <a
              v-for="(link, index) in project.links"
              :key="index"
              :href="link.url"
              :target="link.type === 'external' ? '_blank' : ''"
              class="visit"
            >
              <img :src="link.icon" alt="Link icon" />
            </a>
          </div>
        </div>
        <ul class="skills">
          <li v-for="(skill, index) in project.skills" :key="index">
            {{ skill }}
          </li>
        </ul>
      </div>
      <div v-if="!isImageFirst" class="image">
        <router-link v-if="internalLink" :to="internalLink">
          <img :src="project.imageSrc" :alt="project.title" />
        </router-link>
        <a v-else :href="externalLink" target="_blank">
          <img :src="project.imageSrc" :alt="project.title" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectDisplay",
  props: {
    project: {
      type: Object,
      required: true
    },
    isImageFirst: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    internalLink() {
      const internalLink = this.project.links.find(
        link => link.type === "internal"
      );
      return internalLink ? internalLink.url : null;
    },
    externalLink() {
      const externalLink = this.project.links.find(
        link => link.type === "external"
      );
      return externalLink ? externalLink.url : null;
    }
  }
};
</script>

<style>
.project-display {
  display: flex;
}

.left {
  text-align: left;
  padding-left: 0;
}

.writing-first > .intro {
  margin: 20px;
}

.writing-second {
  margin: 20px;
}

/* .left > .main {
  justify-content: flex-start;
} */

.image a {
  width: 100%;
  height: 100%;
}

.two {
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 0;
  margin-right: 20px;
}

.visit img {
  margin-bottom: 5px;
  width: 100%;
}

.code img {
  width: 40px;
  height: 40px;
  margin-left: -5px;
  margin-right: -10px;
  margin-top: -4px;
}

.nextMobile {
  display: none;
}

.second {
  justify-content: flex-start;
  padding-left: 0;
}

.skills li {
  margin-right: 0.7em;
}

.portfolio {
  text-align: right;
  display: flex;
}

.intro {
  display: block;
}

.main {
  display: flex;
  justify-content: flex-end;
  margin: 20px 0;
  position: relative;
}

.blurb {
  background-color: rgb(250, 250, 250);
  padding: 20px 30px;
  width: 350px;
}

.rightSpace {
  right: 4vw;
}

.image > a {
  width: 100%;
  height: 40px;
}

.image img {
  max-width: 600px;
  position: relative;
}

.code img {
  width: 40px;
  height: 40px;
  margin-left: 10px;
  margin-top: -4px;
}

.links > a {
  margin-bottom: 8px;
}

.visit {
  justify-content: flex-end;
  align-items: flex-end;
  display: flex;
  width: 30px;
  margin-left: 20px;
}

.visit img {
  margin-bottom: 5px;
  width: 100%;
}

.nextMobile {
  display: none;
}

.skills {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  justify-content: flex-end;
}

.skills li {
  margin-right: 0.7em;
}

.image:hover + .skills {
  color: red;
}
</style>
