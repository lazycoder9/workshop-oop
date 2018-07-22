#!/usr/bin/env node
import program from 'commander';
import convertFeed from '../';

program
  .version('0.0.1')
  .description('Do something with RSS and Atom feeds')
  .arguments('<source>')
  .option('-f, --format [type]', 'Output format')
  .action(async (source) => {
    const result = await convertFeed(source, program.format);
    console.log(result);
  })
  .parse(process.argv);
