export default function assess(suite_set){
  const suites = Object.keys(suite_set).map(name => suite_set[name])
  return check_suite(...suites)
}

function check_suite(suite, ...remaining){
  if(!suite) return true;
  if(determine_passing(...suite.specs)) return check_suite(...remaining);
  return false;
}

function determine_passing(spec, ...remaining){
  if(!spec) return true;
  if(spec.status === "passed") return determine_passing(...remaining)
  return false;
}
