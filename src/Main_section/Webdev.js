import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Media from 'react-media'
import './css.css'

const useStyles = makeStyles({
  root: {
    fontWeight:'dark'
  },
});

export default function MultiSelectTreeView() {
  const classes = useStyles();

  return (
      <div>
      <h1 className="tree"><span className="badge" style={{borderRadius:'10px',boxShadow:'6px 6px 6px silver',backgroundColor:'#4285F4'}}>Web Development</span></h1>
      <Media query={{maxWidth: 770}}>
			{matches => matches ? (
               <div>
               <div className="container" style={{paddingTop:'4%'}}>
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      multiSelect
    >
  <div className="row">
    <div className="col">
    <TreeItem nodeId="1" label="FrontEnd" style={{borderLeft:'6px solid #4285F4',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
      <TreeItem nodeId="2" label="1. HTML">
            <a href="https://www.youtube.com/watch?v=UB1O30fR-EE" target='_blank' rel="noreferrer">
               <TreeItem nodeId="3" label="1. HTML Crash Course" />
            </a>
            <a href="https://scrimba.com/learn/html" target='_blank' rel="noreferrer">
               <TreeItem nodeId="4" label="2. HTML Interactive Course" />
            </a>
      </TreeItem>
      <TreeItem nodeId="5" label="2. CSS">
            <a href="https://www.youtube.com/watch?v=yfoY53QXEnI&list=PLillGF-RfqbZTASqIqdvm1R5mLrQq79CU&index=3" target='_blank' rel="noreferrer">
               <TreeItem nodeId="6" label="1. CSS Crash Course" />
            </a>
            <a href="https://scrimba.com/learn/introtocss" target='_blank' rel="noreferrer">
               <TreeItem nodeId="7" label="2. CSS Interactive Course" />
            </a>
      </TreeItem>
      <a href="https://scrimba.com/learn/buildablog" target='_blank' rel="noreferrer">
          <TreeItem nodeId="8" label="3. HTML and CSS project" />
      </a>
      <TreeItem nodeId="9" label="4. CSS Frameworks">
            <a href="https://www.youtube.com/watch?v=I7CfaDYzTVM" target='_blank' rel="noreferrer">
               <TreeItem nodeId="10" label="1. Bootstrap Crash Course" />
            </a>
            <a href="https://scrimba.com/learn/bootstrap4" target='_blank' rel="noreferrer">
               <TreeItem nodeId="11" label="2. Bootstrap 4 Interactive Course" />
            </a>
            <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="12" label="3. Bootstrap 5 Official Website" />
            </a>
      </TreeItem>
      <a href="https://www.youtube.com/watch?v=jx5jmI0UlXU" target='_blank' rel="noreferrer">
          <TreeItem nodeId="13" label="5. Positioning" />
      </a>
      <a href="https://www.youtube.com/watch?v=gXkqy0b4M5g" target='_blank' rel="noreferrer">
          <TreeItem nodeId="14" label="6. Responsive Navigation Bar" />
      </a>
      <TreeItem nodeId="15" label="7. JavaScript">
            <a href="https://www.youtube.com/watch?v=W6NZfCO5SIk" target='_blank' rel="noreferrer">
               <TreeItem nodeId="16" label="1. JavaScript Crash Course" />
            </a>
            <a href="https://scrimba.com/learn/learnjavascript" target='_blank' rel="noreferrer">
               <TreeItem nodeId="17" label="2. JavaScript Interactive Course" />
            </a>
            <a href="https://www.youtube.com/watch?v=mCQ1-iDSnto" target='_blank' rel="noreferrer">
               <TreeItem nodeId="18" label="3. JavaScript Project" />
            </a>
            <a href="https://www.youtube.com/watch?v=Bv_5Zv5c-Ts" target='_blank' rel="noreferrer">
               <TreeItem nodeId="19" label="4. JavaScript: Understanding the Weird Parts" />
            </a>
            <a href="https://www.youtube.com/watch?v=NCwa_xi0Uuc" target='_blank' rel="noreferrer">
               <TreeItem nodeId="20" label="5. ES6 JavaScript Tutorial for Beginners" />
            </a>
      </TreeItem>
      <TreeItem nodeId="21" label="8. You should need to know about cdn and npm before go ahead">
            <a href="https://www.youtube.com/watch?v=yaDtvSV7zJw&t=97s" target='_blank' rel="noreferrer">
               <TreeItem nodeId="22" label="1. What is cdn" />
            </a>
            <a href="https://www.youtube.com/watch?v=ZNbFagCBlwo" target='_blank' rel="noreferrer">
               <TreeItem nodeId="23" label="2. What is npm" />
            </a>
      </TreeItem>
      <TreeItem nodeId="24" label="9. JavaScript library">
            <a href="https://www.youtube.com/watch?v=W6NZfCO5SIk" target='_blank' rel="noreferrer">
               <TreeItem nodeId="25" label="1. JQuery for Beginners" />
            </a>
            <a href="https://www.youtube.com/watch?v=YsPqjYGauns" target='_blank' rel="noreferrer">
               <TreeItem nodeId="26" label="2. JavaScript and JQuery Project" />
            </a>
      </TreeItem>
      <TreeItem nodeId="27" label="10. JavaScript Framework">
            <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d" target='_blank' rel="noreferrer">
               <TreeItem nodeId="28" label="1. React.js for Beginners" />
            </a>
            <a href="https://www.youtube.com/watch?v=XuFDcZABiDQ&list=PLillGF-RfqbY3c2r0htQyVbDJJoBFE6Rb" target='_blank' rel="noreferrer">
               <TreeItem nodeId="29" label="2. React.js Projects" />
            </a>
      </TreeItem>
      <a href="https://www.youtube.com/watch?v=rJesac0_Ftw" target='_blank' rel="noreferrer">
               <TreeItem nodeId="30" label="11. JSON and AJAX Tutorial: With Real Examples" />
      </a>
      <TreeItem nodeId="28" label="11. More deep in FrontEnd">
            <a href="https://www.w3schools.com/whatis/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="31" label="12. W3Schools" />
            </a>
      </TreeItem>
      
      </TreeItem>
    </div>
    </div>
    </TreeView>
    </div>

    <div className="container" style={{paddingTop:'4%'}}>
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      multiSelect
    >
  <div className="row">
    <div className="col">
    <TreeItem nodeId="32" label="BackEnd" style={{borderLeft:'6px solid #EA4335',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
      <TreeItem nodeId="33" label="1. Node.js">
            <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU" target='_blank' rel="noreferrer">
               <TreeItem nodeId="34" label="1. Node.js for beginners" />
            </a>
      </TreeItem>
      <TreeItem nodeId="35" label="2. Npde.js Framework">
            <a href="https://www.youtube.com/watch?v=L72fhGm1tfE" target='_blank' rel="noreferrer">
               <TreeItem nodeId="36" label="1. Express for beginners" />
            </a>
      </TreeItem>
      <a href="https://www.youtube.com/watch?v=pKd0Rpw7O48" target='_blank' rel="noreferrer">
          <TreeItem nodeId="37" label="3. Build a REST API with Node.js & Express" />
      </a>
      <TreeItem nodeId="38" label="4. Node.js and Express Projects">
            <a href="https://www.youtube.com/watch?v=Dkh2IjrAkVI" target='_blank' rel="noreferrer">
               <TreeItem nodeId="39" label="1. Coffee Shop Website" />
            </a>
            <a href="https://www.youtube.com/watch?v=-27HAh8c0YU" target='_blank' rel="noreferrer">
               <TreeItem nodeId="40" label="2. Complete Node & Express with 5 Projects" />
            </a>
      </TreeItem>
      </TreeItem>
    </div>
    
  </div>
  

    </TreeView>
    </div>
    

    <div className="container" style={{paddingTop:'4%'}}>
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      multiSelect
    >
  <div className="row">
    <div className="col">
    <TreeItem nodeId="41" label="Database" style={{borderLeft:'6px solid #34A853',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
            <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9jpvoYriLI0bY8DOgWZfi6u" target='_blank' rel="noreferrer">
               <TreeItem nodeId="42" label="1. MongoDB for beginners" />
            </a>
      </TreeItem>
    </div>
    </div>
    </TreeView>
    </div>

    <div className="container" style={{paddingTop:'4%'}}>
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      multiSelect
    >
  <div className="row">
    <div className="col">
    <TreeItem nodeId="42" label="MERN stack" style={{borderLeft:'6px solid #FBBC05',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
            <a href="https://www.youtube.com/playlist?list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE" target='_blank' rel="noreferrer">
               <TreeItem nodeId="43" label="1. MERN stack" />
            </a>
      </TreeItem>
    </div>
  </div>

    </TreeView>
    </div>
    </div>
            ) : (
               <div>
               <div className="container" style={{paddingTop:'4%'}}>
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      multiSelect
    >
  <div className="row">
    <div className="col tree4 text-dark">
    <TreeItem nodeId="1" label="FrontEnd" style={{borderLeft:'6px solid #4285F4',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
      <TreeItem nodeId="2" label="1. HTML">
            <a href="https://www.youtube.com/watch?v=UB1O30fR-EE" target='_blank' rel="noreferrer">
               <TreeItem nodeId="3" label="1. HTML Crash Course" />
            </a>
            <a href="https://scrimba.com/learn/html" target='_blank' rel="noreferrer">
               <TreeItem nodeId="4" label="2. HTML Interactive Course" />
            </a>
      </TreeItem>
      <TreeItem nodeId="5" label="2. CSS">
            <a href="https://www.youtube.com/watch?v=yfoY53QXEnI&list=PLillGF-RfqbZTASqIqdvm1R5mLrQq79CU&index=3" target='_blank' rel="noreferrer">
               <TreeItem nodeId="6" label="1. CSS Crash Course" />
            </a>
            <a href="https://scrimba.com/learn/introtocss" target='_blank' rel="noreferrer">
               <TreeItem nodeId="7" label="2. CSS Interactive Course" />
            </a>
      </TreeItem>
      <a href="https://scrimba.com/learn/buildablog" target='_blank' rel="noreferrer">
          <TreeItem nodeId="8" label="3. HTML and CSS project" />
      </a>
      <TreeItem nodeId="9" label="4. CSS Frameworks">
            <a href="https://www.youtube.com/watch?v=I7CfaDYzTVM" target='_blank' rel="noreferrer">
               <TreeItem nodeId="10" label="1. Bootstrap Crash Course" />
            </a>
            <a href="https://scrimba.com/learn/bootstrap4" target='_blank' rel="noreferrer">
               <TreeItem nodeId="11" label="2. Bootstrap 4 Interactive Course" />
            </a>
            <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="12" label="3. Bootstrap 5 Official Website" />
            </a>
      </TreeItem>
      <a href="https://www.youtube.com/watch?v=jx5jmI0UlXU" target='_blank' rel="noreferrer">
          <TreeItem nodeId="13" label="5. Positioning" />
      </a>
      <a href="https://www.youtube.com/watch?v=gXkqy0b4M5g" target='_blank' rel="noreferrer">
          <TreeItem nodeId="14" label="6. Responsive Navigation Bar" />
      </a>
      <TreeItem nodeId="15" label="7. JavaScript">
            <a href="https://www.youtube.com/watch?v=W6NZfCO5SIk" target='_blank' rel="noreferrer">
               <TreeItem nodeId="16" label="1. JavaScript Crash Course" />
            </a>
            <a href="https://scrimba.com/learn/learnjavascript" target='_blank' rel="noreferrer">
               <TreeItem nodeId="17" label="2. JavaScript Interactive Course" />
            </a>
            <a href="https://www.youtube.com/watch?v=mCQ1-iDSnto" target='_blank' rel="noreferrer">
               <TreeItem nodeId="18" label="3. JavaScript Project" />
            </a>
            <a href="https://www.youtube.com/watch?v=Bv_5Zv5c-Ts" target='_blank' rel="noreferrer">
               <TreeItem nodeId="19" label="4. JavaScript: Understanding the Weird Parts" />
            </a>
            <a href="https://www.youtube.com/watch?v=NCwa_xi0Uuc" target='_blank' rel="noreferrer">
               <TreeItem nodeId="20" label="5. ES6 JavaScript Tutorial for Beginners" />
            </a>
      </TreeItem>
      <TreeItem nodeId="21" label="8. You should need to know about cdn and npm before go ahead">
            <a href="https://www.youtube.com/watch?v=yaDtvSV7zJw&t=97s" target='_blank' rel="noreferrer">
               <TreeItem nodeId="22" label="1. What is cdn" />
            </a>
            <a href="https://www.youtube.com/watch?v=ZNbFagCBlwo" target='_blank' rel="noreferrer">
               <TreeItem nodeId="23" label="2. What is npm" />
            </a>
      </TreeItem>
      <TreeItem nodeId="24" label="9. JavaScript library">
            <a href="https://www.youtube.com/watch?v=W6NZfCO5SIk" target='_blank' rel="noreferrer">
               <TreeItem nodeId="25" label="1. JQuery for Beginners" />
            </a>
            <a href="https://www.youtube.com/watch?v=YsPqjYGauns" target='_blank' rel="noreferrer">
               <TreeItem nodeId="26" label="2. JavaScript and JQuery Project" />
            </a>
      </TreeItem>
      <TreeItem nodeId="27" label="10. JavaScript Framework">
            <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d" target='_blank' rel="noreferrer">
               <TreeItem nodeId="28" label="1. React.js for Beginners" />
            </a>
            <a href="https://www.youtube.com/watch?v=XuFDcZABiDQ&list=PLillGF-RfqbY3c2r0htQyVbDJJoBFE6Rb" target='_blank' rel="noreferrer">
               <TreeItem nodeId="29" label="2. React.js Projects" />
            </a>
      </TreeItem>
      <a href="https://www.youtube.com/watch?v=rJesac0_Ftw" target='_blank' rel="noreferrer">
               <TreeItem nodeId="30" label="11. JSON and AJAX Tutorial: With Real Examples" />
      </a>
      <TreeItem nodeId="28" label="11. More deep in FrontEnd">
            <a href="https://www.w3schools.com/whatis/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="31" label="12. W3Schools" />
            </a>
      </TreeItem>
      
      </TreeItem>
    </div>

    <div className="col tree1 tree4">
    <TreeItem nodeId="32" label="BackEnd" style={{borderLeft:'6px solid #EA4335',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
      <TreeItem nodeId="33" label="1. Node.js">
            <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU" target='_blank' rel="noreferrer">
               <TreeItem nodeId="34" label="1. Node.js for beginners" />
            </a>
      </TreeItem>
      <TreeItem nodeId="35" label="2. Npde.js Framework">
            <a href="https://www.youtube.com/watch?v=L72fhGm1tfE" target='_blank' rel="noreferrer">
               <TreeItem nodeId="36" label="1. Express for beginners" />
            </a>
      </TreeItem>
      <a href="https://www.youtube.com/watch?v=pKd0Rpw7O48" target='_blank' rel="noreferrer">
          <TreeItem nodeId="37" label="3. Build a REST API with Node.js & Express" />
      </a>
      <TreeItem nodeId="38" label="4. Node.js and Express Projects">
            <a href="https://www.youtube.com/watch?v=Dkh2IjrAkVI" target='_blank' rel="noreferrer">
               <TreeItem nodeId="39" label="1. Coffee Shop Website" />
            </a>
            <a href="https://www.youtube.com/watch?v=-27HAh8c0YU" target='_blank' rel="noreferrer">
               <TreeItem nodeId="40" label="2. Complete Node & Express with 5 Projects" />
            </a>
      </TreeItem>
      </TreeItem>
    </div>
  </div>

    </TreeView>
    </div>

    <div className="container" style={{paddingTop:'4%'}}>
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      multiSelect
    >
  <div className="row">
    <div className="col tree2 tree4">
    <TreeItem nodeId="41" label="Database" style={{borderLeft:'6px solid #34A853',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
            <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9jpvoYriLI0bY8DOgWZfi6u" target='_blank' rel="noreferrer">
               <TreeItem nodeId="42" label="1. MongoDB for beginners" />
            </a>
      </TreeItem>
    </div>
    <div className="col tree3 tree4">
    <TreeItem nodeId="42" label="MERN stack" style={{borderLeft:'6px solid #FBBC05',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
            <a href="https://www.youtube.com/playlist?list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE" target='_blank' rel="noreferrer">
               <TreeItem nodeId="43" label="1. MERN stack" />
            </a>
      </TreeItem>
    </div>
  </div>

    </TreeView>
    </div>
    </div>
            )
          }
        </Media>
    <div style={{boxSizing:'border-box' , backgroundColor:'white', paddingTop:'5%'}} />
    </div>

  );
  }