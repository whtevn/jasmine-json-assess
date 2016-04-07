#!/bin/sh node
import assess from '../index';

const suite_set   = require(`${process.cwd()}/${process.argv.slice(-1)}`);

if(assess(suite_set)){
  process.exit(0);
}else{
  process.exit(1);
}
