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
            <h1 className="tree"><span class="badge" style={{borderRadius:'10px',boxShadow:'6px 6px 6px silver',backgroundColor:'#EA4335'}}>Competetive Programming</span></h1>
  
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
    <TreeItem nodeId="1" label="Basics(Level-1)" style={{borderLeft:'6px solid #4285F4',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
      <TreeItem nodeId="2" label="1. Pre-requisite basic C++">
            <a href="https://www.youtube.com/watch?v=vLnPwxZdW4Y" target='_blank' rel="noreferrer">
               <TreeItem nodeId="3" label="1. C++ for beginners video" />
            </a>
                <a href="https://www.w3schools.com/CPP/default.asp" target='_blank' rel="noreferrer">
                  <TreeItem nodeId="4" label="2. C++ for beginners tutorial on W3Schools site" />
                </a>
      </TreeItem>
      <TreeItem nodeId="5" label="2. Maths">
            <a href="https://www.youtube.com/watch?v=rq_rwnveh8s" target='_blank' rel="noreferrer">
               <TreeItem nodeId="6" label="1. Time Complexity" />
            </a>
            <a href="https://www.youtube.com/watch?v=t9ufm9IImFc" target='_blank' rel="noreferrer">
               <TreeItem nodeId="7" label="2. Remainder and Quotient" />
            </a>
            <a href="https://www.youtube.com/watch?v=xXKL9YBWgCY" target='_blank' rel="noreferrer">
               <TreeItem nodeId="8" label="3. Bit Manipulation" />
            </a>
            <a href="https://www.youtube.com/watch?v=7HCd074v8g8&list=PL2_aWCzGMAwLL-mEB4ef20f3iqWMGWa25&index=8" target='_blank' rel="noreferrer">
               <TreeItem nodeId="9" label="4. Greatest Common Divisor(GCD)" />
            </a>
            <a href="https://www.youtube.com/watch?v=anSfYgbo694" target='_blank' rel="noreferrer">
               <TreeItem nodeId="11" label="5. least common multiple(LCM)" />
            </a>
            <a href="https://www.youtube.com/watch?v=L-Wzglnm4dM&list=PLl0KD3g-oDOEbtmoKT5UWZ-0_JbyLnHPZ&index=13" target='_blank' rel="noreferrer">
               <TreeItem nodeId="12" label="6. Calculating Power" />
            </a>
            <a href="https://www.hackerearth.com/practice/math/combinatorics/basics-of-combinatorics/tutorial/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="13" label="7. Permutation and Combination" />
            </a>
            <a href="https://www.hackerearth.com/practice/math/combinatorics/inclusion-exclusion/tutorial/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="14" label="8. Inclusion Exclusion Principle" />
            </a>
            <a href="https://cp-algorithms.com/algebra/phi-function.html" target='_blank' rel="noreferrer">
               <TreeItem nodeId="15" label="9. Euler Totient Function" />
            </a>
            <a href="https://www.youtube.com/watch?v=6PDtgHhpCHo" target='_blank' rel="noreferrer">
               <TreeItem nodeId="16" label="10. Prime Factorization" />
            </a>
            <a href="https://www.youtube.com/watch?v=eKp56OLhoQs&list=PL2_aWCzGMAwLL-mEB4ef20f3iqWMGWa25&index=5" target='_blank' rel="noreferrer">
               <TreeItem nodeId="17" label="11. Sieve of Eratosthenes aka SOE" />
            </a>
            <a href="https://www.youtube.com/watch?v=-OPohCQqi_E&list=PLl0KD3g-oDOEbtmoKT5UWZ-0_JbyLnHPZ&index=12" target='_blank' rel="noreferrer">
               <TreeItem nodeId="18" label="12. Concept of Modulo" />
            </a>
            <a href="https://cp-algorithms.com/algebra/module-inverse.html" target='_blank' rel="noreferrer">
               <TreeItem nodeId="19" label="13. Modular Multiplicative Inverse" />
            </a>
      </TreeItem>
      <a href="https://www.hackerearth.com/practice/data-structures/arrays/1-d/tutorial/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="20" label="3. Arrays" />
            </a>
            <a href="https://www.hackerearth.com/practice/notes/stl-vector/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="21" label="4. Vectors" />
            </a>
            <a href="https://www.cplusplus.com/reference/string/string/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="22" label="5. Strings" />
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
    <TreeItem nodeId="23" label="Level-2" style={{borderLeft:'6px solid #EA4335',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
    <a href="https://www.hackerearth.com/practice/algorithms/searching/linear-search/tutorial/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="24" label="1. Searching Algorithm" />
            </a>
            <a href="https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/tutorial/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="25" label="2. Sorting Algorithm" />
            </a>
            <a href="https://www.hackerearth.com/practice/basic-programming/recursion/recursion-and-backtracking/tutorial/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="26" label="3. Recursion Algorithm" />
            </a>
            <a href="https://www.hackerearth.com/practice/data-structures/linked-list/singly-linked-list/tutorial/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="27" label="4. Linked List Data Structure" />
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
    <TreeItem nodeId="28" label="Level-3" style={{borderLeft:'6px solid #34A853',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
    <a href="https://www.hackerearth.com/practice/data-structures/stacks/basics-of-stacks/tutorial/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="29" label="1. Stack Data Structure" />
            </a>
            <a href="https://www.hackerearth.com/practice/data-structures/queues/basics-of-queues/tutorial/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="30" label="2. Queue Data Structure" />
            </a>
            <a href="https://www.hackerearth.com/practice/notes/heaps-and-priority-queues/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="31" label="3. Heaps Data Structure" />
            </a>
            <a href="https://www.hackerearth.com/practice/notes/heaps-and-priority-queues/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="32" label="4. Priority Queues Data Structure" />
            </a>
            <a href="https://www.cplusplus.com/reference/map/map/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="33" label="5. Maps" />
            </a>
            <a href="http://www.cplusplus.com/reference/set/set/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="34" label="6. Sets" />
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
    <TreeItem nodeId="35" label="Level-4" style={{borderLeft:'6px solid #FBBC05',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
    <a href="https://www.hackerearth.com/practice/data-structures/advanced-data-structures/trie-keyword-tree/tutorial/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="36" label="1. Trie Data Structure" />
            </a>
            <a href="https://www.hackerearth.com/practice/algorithms/greedy/basics-of-greedy-algorithms/tutorial/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="37" label="2. Greedy Algorithm" />
            </a>
            <a href="https://www.hackerearth.com/practice/algorithms/dynamic-programming/introduction-to-dynamic-programming-1/tutorial/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="38" label="3. Dynamic Programming Algorithm" />
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
    <TreeItem nodeId="39" label="Level-5" style={{borderLeft:'6px solid #4285F4',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
    <a href="https://www.hackerearth.com/practice/data-structures/trees/binary-and-nary-trees/tutorial/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="40" label="1. Trees Data Structure" />
            </a>
            <a href="https://www.hackerearth.com/practice/algorithms/graphs/graph-representation/tutorial/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="41" label="2. Graph Data Structure" />
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
    <TreeItem nodeId="42" label="Advance Topics" style={{borderLeft:'6px solid #EA4335',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
    <a href="https://www.hackerearth.com/practice/algorithms/dynamic-programming/bit-masking/tutorial/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="43" label="1. Dynamic Programming with Bit Masking" />
            </a>
            <a href="https://www.geeksforgeeks.org/digit-dp-introduction/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="44" label="2. Dynamic Programming with Digits" />
            </a>
            <a href="https://blogarithms.github.io/articles/2019-10/inout-dp-tree" target='_blank' rel="noreferrer">
               <TreeItem nodeId="45" label="3. In-Out Dynamic Programming on Trees" />
            </a>
            <a href="https://www.geeksforgeeks.org/sparse-table/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="46" label="4. Sparse Table" />
            </a>
            <a href="https://www.geeksforgeeks.org/binary-indexed-tree-or-fenwick-tree-2/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="47" label="5. Fenwick Tree" />
            </a>
            <a href="https://www.geeksforgeeks.org/lazy-propagation-in-segment-tree/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="48" label="6. Segment Tree with Lazy Propagation" />
            </a>
            <a href="https://www.geeksforgeeks.org/sqrt-square-root-decomposition-technique-set-1-introduction/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="49" label="7. Square Root Decomposition" />
            </a>
            <a href="https://www.geeksforgeeks.org/suffix-array-set-1-introduction/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="50" label="8. Suffix Array" />
            </a>
            <a href="https://www.geeksforgeeks.org/pattern-searching-using-suffix-tree/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="51" label="9. Suffix Tree" />
            </a>
            <a href="https://www.tutorialspoint.com/graph_theory/graph_theory_connectivity.htm" target='_blank' rel="noreferrer">
               <TreeItem nodeId="52" label="10. Edge Connectivity and Vertex Connectivity" />
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
    <TreeItem nodeId="1" label="Basics(Level-1)" style={{borderLeft:'6px solid #4285F4',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
      <TreeItem nodeId="2" label="1. Pre-requisite basic C++">
            <a href="https://www.youtube.com/watch?v=vLnPwxZdW4Y" target='_blank' rel="noreferrer">
               <TreeItem nodeId="3" label="1. C++ for beginners video" />
            </a>
                <a href="https://www.w3schools.com/CPP/default.asp" target='_blank' rel="noreferrer">
                  <TreeItem nodeId="4" label="2. C++ for beginners tutorial on W3Schools site" />
                </a>
      </TreeItem>
      <TreeItem nodeId="5" label="2. Maths">
            <a href="https://www.youtube.com/watch?v=rq_rwnveh8s" target='_blank' rel="noreferrer">
               <TreeItem nodeId="6" label="1. Time Complexity" />
            </a>
            <a href="https://www.youtube.com/watch?v=t9ufm9IImFc" target='_blank' rel="noreferrer">
               <TreeItem nodeId="7" label="2. Remainder and Quotient" />
            </a>
            <a href="https://www.youtube.com/watch?v=xXKL9YBWgCY" target='_blank' rel="noreferrer">
               <TreeItem nodeId="8" label="3. Bit Manipulation" />
            </a>
            <a href="https://www.youtube.com/watch?v=7HCd074v8g8&list=PL2_aWCzGMAwLL-mEB4ef20f3iqWMGWa25&index=8" target='_blank' rel="noreferrer">
               <TreeItem nodeId="9" label="4. Greatest Common Divisor(GCD)" />
            </a>
            <a href="https://www.youtube.com/watch?v=anSfYgbo694" target='_blank' rel="noreferrer">
               <TreeItem nodeId="11" label="5. least common multiple(LCM)" />
            </a>
            <a href="https://www.youtube.com/watch?v=L-Wzglnm4dM&list=PLl0KD3g-oDOEbtmoKT5UWZ-0_JbyLnHPZ&index=13" target='_blank' rel="noreferrer">
               <TreeItem nodeId="12" label="6. Calculating Power" />
            </a>
            <a href="https://www.hackerearth.com/practice/math/combinatorics/basics-of-combinatorics/tutorial/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="13" label="7. Permutation and Combination" />
            </a>
            <a href="https://www.hackerearth.com/practice/math/combinatorics/inclusion-exclusion/tutorial/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="14" label="8. Inclusion Exclusion Principle" />
            </a>
            <a href="https://cp-algorithms.com/algebra/phi-function.html" target='_blank' rel="noreferrer">
               <TreeItem nodeId="15" label="9. Euler Totient Function" />
            </a>
            <a href="https://www.youtube.com/watch?v=6PDtgHhpCHo" target='_blank' rel="noreferrer">
               <TreeItem nodeId="16" label="10. Prime Factorization" />
            </a>
            <a href="https://www.youtube.com/watch?v=eKp56OLhoQs&list=PL2_aWCzGMAwLL-mEB4ef20f3iqWMGWa25&index=5" target='_blank' rel="noreferrer">
               <TreeItem nodeId="17" label="11. Sieve of Eratosthenes aka SOE" />
            </a>
            <a href="https://www.youtube.com/watch?v=-OPohCQqi_E&list=PLl0KD3g-oDOEbtmoKT5UWZ-0_JbyLnHPZ&index=12" target='_blank' rel="noreferrer">
               <TreeItem nodeId="18" label="12. Concept of Modulo" />
            </a>
            <a href="https://cp-algorithms.com/algebra/module-inverse.html" target='_blank' rel="noreferrer">
               <TreeItem nodeId="19" label="13. Modular Multiplicative Inverse" />
            </a>
      </TreeItem>
      <a href="https://www.hackerearth.com/practice/data-structures/arrays/1-d/tutorial/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="21" label="3. Arrays" />
            </a>
            <a href="https://www.hackerearth.com/practice/notes/stl-vector/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="22" label="4. Vectors" />
            </a>
            <a href="https://www.cplusplus.com/reference/string/string/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="23" label="5. Strings" />
            </a>
      </TreeItem>

    </div>
    <div className="col tree4">
    <TreeItem nodeId="24" label="Level-2" style={{borderLeft:'6px solid #EA4335',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
    <a href="https://www.hackerearth.com/practice/algorithms/searching/linear-search/tutorial/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="25" label="1. Searching Algorithm" />
            </a>
            <a href="https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/tutorial/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="26" label="2. Sorting Algorithm" />
            </a>
            <a href="https://www.hackerearth.com/practice/basic-programming/recursion/recursion-and-backtracking/tutorial/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="27" label="3. Recursion Algorithm" />
            </a>
            <a href="https://www.hackerearth.com/practice/data-structures/linked-list/singly-linked-list/tutorial/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="28" label="4. Linked List Data Structure" />
            </a>
      </TreeItem>

    </div>

    <div className="col tree4">
    <TreeItem nodeId="29" label="Level-3" style={{borderLeft:'6px solid #34A853',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
    <a href="https://www.hackerearth.com/practice/data-structures/stacks/basics-of-stacks/tutorial/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="30" label="1. Stacks Data Structure" />
            </a>
            <a href="https://www.hackerearth.com/practice/data-structures/queues/basics-of-queues/tutorial/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="31" label="2. Queues Data Structure" />
            </a>
            <a href="https://www.hackerearth.com/practice/notes/heaps-and-priority-queues/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="32" label="3. Heaps Data Structure" />
            </a>
            <a href="https://www.hackerearth.com/practice/notes/heaps-and-priority-queues/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="33" label="4. Priority Queues Data Structure" />
            </a>
            <a href="https://www.cplusplus.com/reference/map/map/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="34" label="5. Maps" />
            </a>
            <a href="http://www.cplusplus.com/reference/set/set/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="35" label="6. Sets" />
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
    <TreeItem nodeId="36" label="Level-4" style={{borderLeft:'6px solid #FBBC05',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
    <a href="https://www.hackerearth.com/practice/data-structures/advanced-data-structures/trie-keyword-tree/tutorial/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="37" label="1. Trie Data Structure" />
            </a>
            <a href="https://www.hackerearth.com/practice/algorithms/greedy/basics-of-greedy-algorithms/tutorial/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="38" label="2. Greedy Algorithm" />
            </a>
            <a href="https://www.hackerearth.com/practice/algorithms/dynamic-programming/introduction-to-dynamic-programming-1/tutorial/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="39" label="3. Dynamic Programming Algorithm" />
            </a>
      </TreeItem>

    </div>


    <div className="col tree4">
    <TreeItem nodeId="40" label="Level-5" style={{borderLeft:'6px solid #4285F4',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
    <a href="https://www.hackerearth.com/practice/data-structures/trees/binary-and-nary-trees/tutorial/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="41" label="1. Trees Data Structure" />
            </a>
            <a href="https://www.hackerearth.com/practice/algorithms/graphs/graph-representation/tutorial/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="42" label="2. Graph Data Structure" />
            </a>
      </TreeItem>

    </div>
    <div className="col tree4">
    <TreeItem nodeId="43" label="Advance Topics" style={{borderLeft:'6px solid #EA4335',borderRadius:'5px',boxShadow:'3px 3px 3px silver'}}>
    <a href="https://www.hackerearth.com/practice/algorithms/dynamic-programming/bit-masking/tutorial/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="44" label="1. Dynamic Programming with Bit Masking" />
            </a>
            <a href="https://www.geeksforgeeks.org/digit-dp-introduction/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="45" label="2. Dynamic Programming with Digits" />
            </a>
            <a href="https://blogarithms.github.io/articles/2019-10/inout-dp-tree" target='_blank' rel="noreferrer">
               <TreeItem nodeId="46" label="3. In-Out Dynamic Programming on Trees" />
            </a>
            <a href="https://www.geeksforgeeks.org/sparse-table/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="47" label="4. Sparse Table" />
            </a>
            <a href="https://www.geeksforgeeks.org/binary-indexed-tree-or-fenwick-tree-2/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="48" label="5. Fenwick Tree" />
            </a>
            <a href="https://www.geeksforgeeks.org/lazy-propagation-in-segment-tree/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="49" label="6. Segment Tree with Lazy Propagation" />
            </a>
            <a href="https://www.geeksforgeeks.org/sqrt-square-root-decomposition-technique-set-1-introduction/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="50" label="7. Square Root Decomposition" />
            </a>
            <a href="https://www.geeksforgeeks.org/suffix-array-set-1-introduction/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="51" label="8. Suffix Array" />
            </a>
            <a href="https://www.geeksforgeeks.org/pattern-searching-using-suffix-tree/" target='_blank' rel="noreferrer">
               <TreeItem nodeId="52" label="9. Suffix Tree" />
            </a>
            <a href="https://www.tutorialspoint.com/graph_theory/graph_theory_connectivity.htm" target='_blank' rel="noreferrer">
               <TreeItem nodeId="53" label="10. Edge Connectivity and Vertex Connectivity" />
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