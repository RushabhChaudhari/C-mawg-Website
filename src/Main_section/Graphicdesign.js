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
            <h1 className="tree"><span className="badge" style={{borderRadius:'10px',boxShadow:'6px 6px 6px silver',backgroundColor:'black'}}>Graphic Design</span></h1>
  
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
    <TreeItem nodeId="1" label="Adobe Photoshop" style={{borderLeft:'6px solid #4285F4',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
    <a href="https://www.youtube.com/playlist?list=PLYfCBK8IplO6v0QjCj-TSrFUXnRV0WxfE" target='_blank' rel="noreferrer">
               <TreeItem nodeId="2" label="1. For beginners" />
            </a>

            <a href="https://www.youtube.com/playlist?list=PLSoOtQkDh8ByH7x6eQfjVt09V9GJMxL2Z" target='_blank' rel="noreferrer">
               <TreeItem nodeId="3" label="2. For Intermediate" />
            </a>
            <a href="https://www.youtube.com/playlist?list=PLSoOtQkDh8BzAkcdCb1nps3R3oz5M4AKf" target='_blank' rel="noreferrer">
               <TreeItem nodeId="4" label="3. For Advanced" />
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
    <TreeItem nodeId="5" label="Adobe Illustrator" style={{borderLeft:'6px solid #EA4335',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
    <a href="https://www.youtube.com/playlist?list=PLYfCBK8IplO4X-jM1Rp43wAIdpP2XNGwP" target='_blank' rel="noreferrer">
               <TreeItem nodeId="6" label="1. For beginners" />
            </a>

            <a href="https://www.youtube.com/playlist?list=PLwnXQvUxjbNsvCG_rJJ8vzhbqtEjphKsf" target='_blank' rel="noreferrer">
               <TreeItem nodeId="7" label="2. For Intermediate" />
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
    <TreeItem nodeId="8" label="Blender" style={{borderLeft:'6px solid #34A853',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
    <a href="https://www.youtube.com/user/AndrewPPrice" target='_blank' rel="noreferrer">
               <TreeItem nodeId="9" label="1. Blender Tutorial" />
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
    <TreeItem nodeId="1" label="Adobe Photoshop" style={{borderLeft:'6px solid #4285F4',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
    <a href="https://www.youtube.com/playlist?list=PLYfCBK8IplO6v0QjCj-TSrFUXnRV0WxfE" target='_blank' rel="noreferrer">
               <TreeItem nodeId="2" label="1. For beginners" />
            </a>

            <a href="https://www.youtube.com/playlist?list=PLSoOtQkDh8ByH7x6eQfjVt09V9GJMxL2Z" target='_blank' rel="noreferrer">
               <TreeItem nodeId="3" label="2. For Intermediate" />
            </a>
            <a href="https://www.youtube.com/playlist?list=PLSoOtQkDh8BzAkcdCb1nps3R3oz5M4AKf" target='_blank' rel="noreferrer">
               <TreeItem nodeId="4" label="3. For Advanced" />
            </a>
   </TreeItem>

    </div>

    <div className="col tree4">
    <TreeItem nodeId="5" label="Adobe Illustrator" style={{borderLeft:'6px solid #EA4335',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
    <a href="https://www.youtube.com/playlist?list=PLYfCBK8IplO4X-jM1Rp43wAIdpP2XNGwP" target='_blank' rel="noreferrer">
               <TreeItem nodeId="6" label="1. For beginners" />
            </a>

            <a href="https://www.youtube.com/playlist?list=PLwnXQvUxjbNsvCG_rJJ8vzhbqtEjphKsf" target='_blank' rel="noreferrer">
               <TreeItem nodeId="7" label="2. For Intermediate" />
            </a>
   </TreeItem>

    </div>

    <div className="col tree2 tree4">
    <TreeItem nodeId="8" label="Blender" style={{borderLeft:'6px solid #34A853',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
    <a href="https://www.youtube.com/user/AndrewPPrice" target='_blank' rel="noreferrer">
               <TreeItem nodeId="9" label="1. Blender Tutorial" />
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