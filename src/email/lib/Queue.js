import Queue from 'bull';
import redisConfig from '../config/redis';

import * as jobs from '../jobs';

const queues = Object.values(jobs).map((job) => ({
  bull: new Queue(job.key, redisConfig),
  name: job.key,
  handle: job.handle,
}));

export default {
  queues,
  add(name, data) {
    const queue = this.queues.find((queueFind) => queueFind.name === name);

    return queue.bull.add(data);
  },
  process() {
    return queues.forEach((queue) => {
      queue.bull.process(queue.handle);

      queue.bull.on('failed', (job) => {
        console.log('job failed', queue.name, job.data);
        console.log(err);
      });

      queue.bull.on('completed', (job) => {
        console.log('job completed', queue.name, job.data);
      });
    });
  },
};
