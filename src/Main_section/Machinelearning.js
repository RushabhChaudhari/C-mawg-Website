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
      <h1 className="tree"><span class="badge" style={{borderRadius:'10px',boxShadow:'6px 6px 6px silver',backgroundColor:'#34A853'}}>Machine Learning</span></h1>
  
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
    <TreeItem nodeId="1" label="Pick a Language" style={{borderLeft:'6px solid #4285F4',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
      <TreeItem nodeId="2" label="1. Python">
            <a href="https://www.youtube.com/watch?v=Z1Yd7upQsXY" target='_blank' rel="noreferrer">
               <TreeItem nodeId="3" label="1. Python for beginners" />
            </a>
            <TreeItem nodeId="4" label="2. Python library for Machine Learning">
                <a href="https://www.youtube.com/watch?v=0Lt9w-BxKFQ" target='_blank' rel="noreferrer">
                  <TreeItem nodeId="5" label="1. SKlearn" />
                </a>
            </TreeItem>
      </TreeItem>
      <TreeItem nodeId="6" label="2. R">
            <a href="https://www.youtube.com/watch?v=BvKETZ6kr9Q" target='_blank' rel="noreferrer">
               <TreeItem nodeId="7" label="1. R for beginners" />
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
    <TreeItem nodeId="8" label="Maths for Machine Learning" style={{borderLeft:'6px solid #EA4335',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
       <a href="https://www.youtube.com/watch?v=kZwSqZuBMGg" target='_blank' rel="noreferrer">
          <TreeItem nodeId="9" label="1. Learn Linear Algebra" />
      </a>
      <a href="https://www.youtube.com/watch?v=XcLO4f1i4Yo" target='_blank' rel="noreferrer">
          <TreeItem nodeId="10" label="2. Learn Statistics" />
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
    <TreeItem nodeId="11" label="Core Machine Learning Algorithms" style={{borderLeft:'6px solid #34A853',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
    <a href="https://www.youtube.com/watch?v=sDv4f4s2SB8" target='_blank' rel="noreferrer">
               <TreeItem nodeId="12" label="1. Gradient Descent" />
            </a>
      <TreeItem nodeId="13" label="2. Supervised vs Unsupervised Learning">
            <a href="https://www.youtube.com/watch?v=QeKshry8pWQ" target='_blank' rel="noreferrer">
               <TreeItem nodeId="14" label="1. Supervised Learning" />
            </a>
            <a href="https://www.youtube.com/watch?v=D6gtZrsYi6c" target='_blank' rel="noreferrer">
          <TreeItem nodeId="15" label="2. Unsupervised Learning" />
      </a>
      </TreeItem>
      <a href="https://www.youtube.com/watch?v=E5RjzSK0fvY" target='_blank' rel="noreferrer">
          <TreeItem nodeId="16" label="3. basic Linear Regression" />
      </a>
      <a href="https://www.youtube.com/watch?v=lIdO0MxoAiM" target='_blank' rel="noreferrer">
          <TreeItem nodeId="17" label="4. Slope" />
      </a>
      <a href="https://www.youtube.com/watch?v=LzaWrmKL1Z4" target='_blank' rel="noreferrer">
          <TreeItem nodeId="18" label="5. Reinforcement learning" />
      </a>
      <a href="https://www.youtube.com/watch?v=iIoPa1CrE-s" target='_blank' rel="noreferrer">
          <TreeItem nodeId="19" label="6. Clustering" />
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
  <div className="col tree3 tree4">
    <TreeItem nodeId="20" label="Python Libraries" style={{borderLeft:'6px solid #FBBC05',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
            <a href="https://www.youtube.com/watch?v=vmEHCJofslg" target='_blank' rel="noreferrer">
               <TreeItem nodeId="21" label="1. Pandas" />
            </a>
            <a href="https://www.youtube.com/watch?v=8JfDAm9y_7s" target='_blank' rel="noreferrer">
               <TreeItem nodeId="22" label="2. Numpy" />
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
  <div className="col tree4">
    <TreeItem nodeId="23" label="Learn Deployment" style={{borderLeft:'6px solid #4285F4',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
      <TreeItem nodeId="24" label="1. Frameworks">
            <a href="https://www.youtube.com/watch?v=OTmQOjsl0eg" target='_blank' rel="noreferrer">
               <TreeItem nodeId="25" label="1. Django" />
            </a>
            <a href="https://www.youtube.com/watch?v=Z1RJmh_OqeA" target='_blank' rel="noreferrer">
               <TreeItem nodeId="26" label="2. Flask" />
            </a>
      </TreeItem>
      <TreeItem nodeId="27" label="2. Custom Web Apps">
            <a href="https://www.youtube.com/watch?v=XWAJ77FK5vY" target='_blank' rel="noreferrer">
               <TreeItem nodeId="28" label="1. Streamlit" />
            </a>
      </TreeItem>
      <TreeItem nodeId="29" label="3. Deploying ML Models">
            <a href="https://www.youtube.com/watch?v=bi0cKgmRuiA" target='_blank' rel="noreferrer">
               <TreeItem nodeId="30" label="1. Docker" />
            </a>
            <a href="https://www.youtube.com/watch?v=X48VuDVv0do" target='_blank' rel="noreferrer">
               <TreeItem nodeId="31" label="2. Kubernetes" />
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
    <TreeItem nodeId="32" label="And last Keep Learning..." style={{borderLeft:'6px solid #EA4335',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
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
    <TreeItem nodeId="1" label="Pick a Language" style={{borderLeft:'6px solid #4285F4',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
      <TreeItem nodeId="2" label="1. Python">
            <a href="https://www.youtube.com/watch?v=Z1Yd7upQsXY" target='_blank' rel="noreferrer">
               <TreeItem nodeId="3" label="1. Python for beginners" />
            </a>
            <TreeItem nodeId="4" label="2. Python library for Machine Learning">
                <a href="https://www.youtube.com/watch?v=0Lt9w-BxKFQ" target='_blank' rel="noreferrer">
                  <TreeItem nodeId="5" label="1. SKlearn" />
                </a>
            </TreeItem>
      </TreeItem>
      <TreeItem nodeId="6" label="2. R">
            <a href="https://www.youtube.com/watch?v=BvKETZ6kr9Q" target='_blank' rel="noreferrer">
               <TreeItem nodeId="7" label="1. R for beginners" />
            </a>
      </TreeItem>
      </TreeItem>

    </div>
    <div className="col tree1 tree4">
    <TreeItem nodeId="8" label="Maths for Machine Learning" style={{borderLeft:'6px solid #EA4335',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
       <a href="https://www.youtube.com/watch?v=kZwSqZuBMGg" target='_blank' rel="noreferrer">
          <TreeItem nodeId="9" label="1. Learn Linear Algebra" />
      </a>
      <a href="https://www.youtube.com/watch?v=XcLO4f1i4Yo" target='_blank' rel="noreferrer">
          <TreeItem nodeId="10" label="2. Learn Statistics" />
      </a>
      </TreeItem>

    </div>
    <div className="col tree2 tree4">
    <TreeItem nodeId="11" label="Core Machine Learning Algorithms" style={{borderLeft:'6px solid #34A853',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
    <a href="https://www.youtube.com/watch?v=sDv4f4s2SB8" target='_blank' rel="noreferrer">
               <TreeItem nodeId="12" label="1. Gradient Descent" />
            </a>
      <TreeItem nodeId="13" label="2. Supervised vs Unsupervised Learning">
            <a href="https://www.youtube.com/watch?v=QeKshry8pWQ" target='_blank' rel="noreferrer">
               <TreeItem nodeId="14" label="1. Supervised Learning" />
            </a>
            <a href="https://www.youtube.com/watch?v=D6gtZrsYi6c" target='_blank' rel="noreferrer">
          <TreeItem nodeId="15" label="2. Unsupervised Learning" />
      </a>
      </TreeItem>
      <a href="https://www.youtube.com/watch?v=E5RjzSK0fvY" target='_blank' rel="noreferrer">
          <TreeItem nodeId="16" label="3. basic Linear Regression" />
      </a>
      <a href="https://www.youtube.com/watch?v=lIdO0MxoAiM" target='_blank' rel="noreferrer">
          <TreeItem nodeId="17" label="4. Slope" />
      </a>
      <a href="https://www.youtube.com/watch?v=LzaWrmKL1Z4" target='_blank' rel="noreferrer">
          <TreeItem nodeId="18" label="5. Reinforcement learning" />
      </a>
      <a href="https://www.youtube.com/watch?v=iIoPa1CrE-s" target='_blank' rel="noreferrer">
          <TreeItem nodeId="19" label="6. Clustering" />
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
  <div className="col tree3 tree4">
    <TreeItem nodeId="20" label="Python Libraries" style={{borderLeft:'6px solid #FBBC05',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
            <a href="https://www.youtube.com/watch?v=vmEHCJofslg" target='_blank' rel="noreferrer">
               <TreeItem nodeId="21" label="1. Pandas" />
            </a>
            <a href="https://www.youtube.com/watch?v=8JfDAm9y_7s" target='_blank' rel="noreferrer">
               <TreeItem nodeId="22" label="2. Numpy" />
            </a>
      </TreeItem>
    </div>
  <div className="col tree4">
    <TreeItem nodeId="23" label="Learn Deployment" style={{borderLeft:'6px solid #4285F4',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
      <TreeItem nodeId="24" label="1. Frameworks">
            <a href="https://www.youtube.com/watch?v=OTmQOjsl0eg" target='_blank' rel="noreferrer">
               <TreeItem nodeId="25" label="1. Django" />
            </a>
            <a href="https://www.youtube.com/watch?v=Z1RJmh_OqeA" target='_blank' rel="noreferrer">
               <TreeItem nodeId="26" label="2. Flask" />
            </a>
      </TreeItem>
      <TreeItem nodeId="27" label="2. Custom Web Apps">
            <a href="https://www.youtube.com/watch?v=XWAJ77FK5vY" target='_blank' rel="noreferrer">
               <TreeItem nodeId="28" label="1. Streamlit" />
            </a>
      </TreeItem>
      <TreeItem nodeId="29" label="3. Deploying ML Models">
            <a href="https://www.youtube.com/watch?v=bi0cKgmRuiA" target='_blank' rel="noreferrer">
               <TreeItem nodeId="30" label="1. Docker" />
            </a>
            <a href="https://www.youtube.com/watch?v=X48VuDVv0do" target='_blank' rel="noreferrer">
               <TreeItem nodeId="31" label="2. Kubernetes" />
            </a>
      </TreeItem>
      </TreeItem>

    </div>
    
    <div className="col tree1 tree4">
    <TreeItem nodeId="32" label="And last Keep Learning..." style={{borderLeft:'6px solid #EA4335',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
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