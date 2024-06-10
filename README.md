# Glacier melt plugin

The glacier melt plugin estimates the amount of global glacier ice melted (kg) as a result of carbon emissions. This enables Impact Framework users to estimate the glacier ice melted due to their software applications.

This is based on back-of-envelope calculations shared on Ken Caldeira's blog here: https://kencaldeira.wordpress.com/2018/03/24/how-much-ice-is-melted-by-each-carbon-dioxide-emission/

It's not a super rigorous calculation, and should only be used for illustrative purposes and not used as the basis for any scientific endeavours, audits etc.

## Parameters

- `carbon`: the amount of carbon emitted per timestep in gCO2eq

## Global config

This plugin does not require any global config

## Returns

- `glacier-melt`: g of ice melted

## Implementation

The glacier melt plugin is a very simple plugin with no global config. It operates only on the `carbon` value provided in the `inputs` array in your manifest file.

## Usage

To run the plugin, an instance of `GlacierMelt` must be created. Then, the plugin's `execute()` method can be called.

This is how you could run the model in Typescript:

```typescript
import {GlacierMelt} from './lib/glacier-melt';

const plugin = GlacierMelt();

const result = plugin.execute([
  {
    timestamp: '2023-08-06T00:00',
    duration: 3600,
    carbon: 10,
  },
]);

console.log(result);

```

## Example Manifest

```yaml
name: glacier melt demo
description: a minimal manifest executing the glacier melt plugin for a single timestep
tags:
initialize:
  plugins:
    glacier-melt: 
      path: 'glacier-melt'
      method: GlacierMelt
tree:
  children:
    child-0:
      defaults:
        cpu/thermal-design-power: 100
      pipeline:
        - glacier-melt
      inputs:
        - timestamp: 2023-07-06T00:00
          duration: 1
          carbon: 20

```
