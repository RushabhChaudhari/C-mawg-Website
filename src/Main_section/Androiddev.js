import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Media from 'react-media'

const useStyles = makeStyles({
  root: {
    fontWeight:'dark'
  },
});

export default function MultiSelectTreeView() {
  const classes = useStyles();

  return (
      <div>
      <h1 className="tree"><span class="badge" style={{borderRadius:'10px',boxShadow:'6px 6px 6px silver',backgroundColor:'#FBBC05'}}>App Development</span></h1>
  
      <Media query={{maxWidth: 1150}}>
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
    <div className="col tree4">
    <TreeItem nodeId="1" label="Level-1" style={{borderLeft:'6px solid #4285F4',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
    <a href="https://in.udacity.com/course/java-programming-basics--ud282" target='_blank' rel="noreferrer">
               <TreeItem nodeId="2" label="1. Java for beginners" />
            </a>

            <TreeItem nodeId="3" label="2. Android Basics">
            <a href="https://in.udacity.com/course/android-basics-user-input--ud836" target='_blank' rel="noreferrer">
               <TreeItem nodeId="4" label="1. User Input by Google" />
            </a>
            <a href="https://in.udacity.com/course/android-basics-multiscreen-apps--ud839" target='_blank' rel="noreferrer">
          <TreeItem nodeId="5" label="2. Multiscreen Apps by Google" />
           </a>
           <a href="https://in.udacity.com/course/android-basics-data-storage--ud845" target='_blank' rel="noreferrer">
          <TreeItem nodeId="6" label="3. Data Storage by Google" />
           </a>
           <a href="https://in.udacity.com/course/android-basics-networking--ud843" target='_blank' rel="noreferrer">
          <TreeItem nodeId="7" label="4. Networking by Google" />
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
    <div className="col tree1 tree4">
    <TreeItem nodeId="8" label="Level-2" style={{borderLeft:'6px solid #EA4335',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
       <a href="https://in.udacity.com/course/object-oriented-programming-in-java--ud283" target='_blank' rel="noreferrer">
          <TreeItem nodeId="9" label="1. Object Oriented Programming in Java" />
      </a>
      <a href="https://www.youtube.com/playlist?list=PLE7E8B7F4856C9B19" target='_blank' rel="noreferrer">
          <TreeItem nodeId="10" label="2. Java Tutorials by Derek Banas" />
      </a>
      <a href="https://in.udacity.com/course/new-android-fundamentals--ud851" target='_blank' rel="noreferrer">
          <TreeItem nodeId="11" label="3. Developing Android Apps by Google" />
      </a>
      <a href="https://in.udacity.com/course/firebase-in-a-weekend-by-google-android--ud0352" target='_blank' rel="noreferrer">
          <TreeItem nodeId="12" label="4. Firebase in a Weekend: Android by Google" />
      </a>
      <a href="https://in.udacity.com/course/material-design-for-android-developers--ud862" target='_blank' rel="noreferrer">
          <TreeItem nodeId="13" label="5. Material Design for Android Developers by Google" />
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
    <div className="col tree2 tree4">
    <TreeItem nodeId="14" label="Advanced Topics" style={{borderLeft:'6px solid #34A853',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
    <a href="https://in.udacity.com/course/advanced-android-app-development--ud855" target='_blank' rel="noreferrer">
               <TreeItem nodeId="15" label="1. Advanced Android App Development by Google" />
            </a>
            <a href="https://in.udacity.com/course/android-performance--ud825" target='_blank' rel="noreferrer">
               <TreeItem nodeId="16" label="2. Android Performance by Google" />
            </a>
            <a href="https://in.udacity.com/course/gradle-for-android-and-java--ud867" target='_blank' rel="noreferrer">
               <TreeItem nodeId="17" label="3. Gradle for Android and Java by Google" />
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
    <div className="col tree4">
    <TreeItem nodeId="1" label="Level-1" style={{borderLeft:'6px solid #4285F4',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
    <a href="https://in.udacity.com/course/java-programming-basics--ud282" target='_blank' rel="noreferrer">
               <TreeItem nodeId="2" label="1. Java for beginners" />
            </a>

            <TreeItem nodeId="3" label="2. Android Basics">
            <a href="https://in.udacity.com/course/android-basics-user-input--ud836" target='_blank' rel="noreferrer">
               <TreeItem nodeId="4" label="1. User Input by Google" />
            </a>
            <a href="https://in.udacity.com/course/android-basics-multiscreen-apps--ud839" target='_blank' rel="noreferrer">
          <TreeItem nodeId="5" label="2. Multiscreen Apps by Google" />
           </a>
           <a href="https://in.udacity.com/course/android-basics-data-storage--ud845" target='_blank' rel="noreferrer">
          <TreeItem nodeId="6" label="3. Data Storage by Google" />
           </a>
           <a href="https://in.udacity.com/course/android-basics-networking--ud843" target='_blank' rel="noreferrer">
          <TreeItem nodeId="7" label="4. Networking by Google" />
           </a>
      </TreeItem>
   </TreeItem>

    </div>

    <div className="col tree1 tree4">
    <TreeItem nodeId="8" label="Level-2" style={{borderLeft:'6px solid #EA4335',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
       <a href="https://in.udacity.com/course/object-oriented-programming-in-java--ud283" target='_blank' rel="noreferrer">
          <TreeItem nodeId="9" label="1. Object Oriented Programming in Java" />
      </a>
      <a href="https://www.youtube.com/playlist?list=PLE7E8B7F4856C9B19" target='_blank' rel="noreferrer">
          <TreeItem nodeId="10" label="2. Java Tutorials by Derek Banas" />
      </a>
      <a href="https://in.udacity.com/course/new-android-fundamentals--ud851" target='_blank' rel="noreferrer">
          <TreeItem nodeId="11" label="3. Developing Android Apps by Google" />
      </a>
      <a href="https://in.udacity.com/course/firebase-in-a-weekend-by-google-android--ud0352" target='_blank' rel="noreferrer">
          <TreeItem nodeId="12" label="4. Firebase in a Weekend: Android by Google" />
      </a>
      <a href="https://in.udacity.com/course/material-design-for-android-developers--ud862" target='_blank' rel="noreferrer">
          <TreeItem nodeId="13" label="5. Material Design for Android Developers by Google" />
      </a>
      </TreeItem>

    </div>

    <div className="col tree2 tree4">
    <TreeItem nodeId="14" label="Advanced Topics" style={{borderLeft:'6px solid #34A853',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
    <a href="https://in.udacity.com/course/advanced-android-app-development--ud855" target='_blank' rel="noreferrer">
               <TreeItem nodeId="15" label="1. Advanced Android App Development by Google" />
            </a>
            <a href="https://in.udacity.com/course/android-performance--ud825" target='_blank' rel="noreferrer">
               <TreeItem nodeId="16" label="2. Android Performance by Google" />
            </a>
            <a href="https://in.udacity.com/course/gradle-for-android-and-java--ud867" target='_blank' rel="noreferrer">
               <TreeItem nodeId="17" label="3. Gradle for Android and Java by Google" />
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
   
    <div style={{boxSizing:'border-box' , backgroundColor:'white', marginTop:'5%'}} />
    </div>
  );
  }