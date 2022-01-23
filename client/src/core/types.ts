export type ActionType = 'ProduceToKafka' | 'ConsumeFromKafka'

export type ResourceType = 'KafkaConsumer' | 'KafkaProducer'

export const eventType = ['ACTION_ERROR', 'ACTION_START', 'ACTION_STOP', 'ON_RECORD_CONSUMED']

export const triggerEventType = [
  'ACTION_ERROR',
  'ACTION_START',
  'ACTION_STOP',
  'SCENARIO_START',
  'SCENARIO_STOP',
  'WORKFLOW_START',
  'WORKFLOW_FAIL',
  'WORKFLOW_ERROR',
  'WORKFLOW_STOP',
  'ON_RECORD_CONSUMED',
  'ON_RECORD_PRODUCED',
]

export const comparatorType = ['EQUALS', 'CONTAINS', 'STARTS_WITH', 'ENDS_WITH'] as const

export type ComparatorType = typeof comparatorType[number]
export type TriggerType = typeof triggerEventType[number]

export enum NodeTypes {
  ConsumeNode = 'ConsumeNode',
  ProduceNode = 'ProduceNode',
  SetVariableNode = 'SetVariableNode',
  ScenarioStartNode = 'ScenarioStartNode',
}

export enum ExecutionNodeTypes {
  WorkflowExecutionNode = 'WorkflowExecutionNode',
  TriggerExecutionNode = 'TriggerExecutionNode',
}
export enum WorkflowTypes {
  Produce = 'Produce',
  Consume = 'Consume',
  SetVariable = 'Set Variable',
}

export enum WorkflowFrom {
  workflowConsume = 'workflowConsume',
  workflowProduce = 'workflowProduce',
  workflowVariable = 'workflowVariable',
  trigger = 'trigger',
}

export enum VariablePathType {
  Basic = 'Basic',
  Advanced = 'Advanced',
}
