/*jshint checkformat:true*/
switch (a) {
/*jshint
    format: {
        indent: {
            caseLabel: false,
            caseContent: false
        }
    }
*/
case 1:
break; 
case 2: 
break;
default:
break;
}

switch (a) {
/*jshint
    format: {
        indent: {
            caseLabel: false,
            caseContent: true
        }
    }
*/
case 1:
    break; 
case 2: 
    break;
default:
    break;
}

switch (a) {
    /*jshint
        format: {
            indent: {
                caseLabel: true,
                caseContent: false
            }
        }
    */
    case 1:
    break; 
    case 2: 
    break;
    default:
    break;
}

switch (a) {
    /*jshint
        format: {
            indent: {
                caseLabel: true,
                caseContent: true
            }
        }
    */
    case 1:
        break; 
    case 2: 
        break;
    default:
        break;
}

/////////////
// with errors in every mode
switch (a) {
/*jshint
    format: {
        indent: {
            caseLabel: false,
            caseContent: false
        }
    }
*/
case 1:
  break; 
  case 2: 
    break;
default:
break;
}

switch (a) {
/*jshint
    format: {
        indent: {
            caseLabel: false,
            caseContent: true
        }
    }
*/
case 1:
  break; 
  case 2: 
    break;
default:
break;
}

switch (a) {
    /*jshint
        format: {
            indent: {
                caseLabel: true,
                caseContent: false
            }
        }
    */
case 1:
  break; 
  case 2: 
    break;
default:
break;
}

switch (a) {
    /*jshint
        format: {
            indent: {
                caseLabel: true,
                caseContent: true
            }
        }
    */
case 1:
  break; 
  case 2: 
    break;
default:
break;
}
