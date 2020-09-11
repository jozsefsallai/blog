const fs = require('fs');
const path = require('path');

const inquirer = require('inquirer');
const slugify = require('@sindresorhus/slugify');

const CONTENT_PATH = path.join(__dirname, '..', 'posts');

const POST_TEMPLATE = `---
title: {{ title }}
description:
date: '{{ date }}'
tags:
categories:
image:
---
`;

const run = async () => {
  try {
    const { title } = await inquirer.prompt([
      {
        name: 'title',
        type: 'input',
        message: 'Post title:'
      }
    ]);

    if (!title || !title.length) {
      console.error('Please provide a valid title.');
      process.exit(1);
    }

    let { slug } = await inquirer.prompt([
      {
        name: 'slug',
        type: 'input',
        message: 'Slug:',
        default: slugify(title)
      }
    ]);

    if (!slug || !slug.length) {
      slug = slugify(title);
    } else {
      slug = slugify(slug);
    }

    let filename = slug;
    let attempts = 0;

    while (fs.existsSync(path.join(CONTENT_PATH, `${filename}.md`))) {
      filename = `${slug}-${++attempts}`;
    }

    if (attempts) {
      console.warn(`Slug already exists so an additional ${attempts} was appended to it.`);
    }

    const filledTemplate = POST_TEMPLATE
      .replace('{{ title }}', title)
      .replace('{{ date }}', new Date().toISOString());

    fs.writeFileSync(path.join(CONTENT_PATH, `${filename}.md`), filledTemplate, { encoding: 'utf8' });

    console.log('Done!');
  } catch (err) {
    console.error(err);
    process.exit(-1);
  }
};

run().then(() => process.exit(0));
