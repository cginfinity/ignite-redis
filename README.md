# node-red-contrib-redis
Node Red client for Redis with pub/sub, list, lua scripting, ssl, cluster, custom commands, instance injection and other commands support.

Connection Options parameter receives IORedis object or string (https://github.com/luin/ioredis#connect-to-redis).

Now uses same connection per config name and open new if you set block connection option.

Roadmap:
- (ok)Stream Support
- (ok)Flow or Global redis instance injection to use on function Node.
- (wip)Better Validations
- (ok)Custom Commands support(Modules), with instance or Cmd.
