import{aJ as R,l as u,b9 as m,K as v,aH as d}from"./index-C9bkuwCU.js";import{ab as b,ac as p}from"./index.es-BJqHzGu1.js";v`
  fragment UseRelevantRun on RelevantRun {
    all {
      runId
      runNumber
      sha
      status
    }
    latest {
      runId
      runNumber
      sha
      status
    }
    commitsAhead
    selectedRunNumber
    currentCommitInfo {
      sha
      message
    }
  }

  subscription Debug_RelevantRuns_Subscription($location: RelevantRunLocationEnum!) {
    relevantRuns(location: $location) {
      ...UseRelevantRun
    }
  }

  subscription Sidebar_RelevantRuns_Subscription($location: RelevantRunLocationEnum!) {
    relevantRuns(location: $location) {
      ...UseRelevantRun
    }
  }

`;function f(n){const o=R(),r=u(()=>!o.project.isProjectConnected);let a=b;n==="SIDEBAR"&&(a=p);const e=m({query:a,variables:{location:n},pause:r});return u(()=>{const s=e.data.value?.relevantRuns?.all,l=e.data.value?.relevantRuns?.selectedRunNumber,c=s?.find(t=>t.runNumber===l),i=d.uniq(s?.map(t=>t.sha));return{all:e.data.value?.relevantRuns?.all,latest:e.data.value?.relevantRuns?.latest,commitsAhead:e.data.value?.relevantRuns?.commitsAhead,selectedRun:c,commitShas:i,currentCommitInfo:e.data.value?.relevantRuns?.currentCommitInfo}})}export{f as u};
